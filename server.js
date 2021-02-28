import express from 'express';
const app = express();
import http from 'http';
//import createButton from './public/alerta.js'
import socketio from 'socket.io';

app.use(express.static('public'));

//app.use('/files', express.static(path.resolve(__dirname, '..', 'public')));
const server = http.createServer(app);
const io = socketio(server);


let users = []; // o seu banco de dados!
let prontos = 0;
io.on('connection', (socket) => {
  
  socket.on('sent user', (user) => {
    users.push(user);
    console.log("user: " +user);
    io.emit('new user', user);
    
  });
  socket.emit('users', users);

  socket.on('prontos', (pronto)=>{
    prontos++;
    io.emit('pronto', prontos);
    
    console.log("users: "+ prontos);
  });
   socket.on('restart', ()=>{
    prontos = 0;
    users = [];
    io.emit('reiniciar', prontos);
  }) 
  socket.on('qntusers', (sala)=>{
    io.emit('sala', sala);
  })
 
  
});
  

  const port = process.env.PORT || 3001;
  server.listen(port, () => console.log(`[x] Magic happens on port: ${port}`));