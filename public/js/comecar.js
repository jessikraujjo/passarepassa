var user = 0;
var entrou = 3;
var intervalo;


function tempo(op) {
    
    var s = op;
    
    intervalo = window.setInterval(function() {
        
        if (s >= 0) {
            document.getElementById("segundo").innerHTML = "0" + s + "s"; 
        s--;
        if (s == 0) {
            habilitar = true;

        }
        console.log(s)
        }
        
    },1000);
}
function comecar(){
    user++;
    document.getElementById('cont').innerHTML = user;
    document.getElementById('entrou').innerHTML = entrou;
    if(user == 3){
        window.onload=tempo;
        tempo(5);
       
    }
}
