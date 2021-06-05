

function resultado (jugador){
    const result = document.querySelector('.result');
    const maquina = document.querySelector('.maquina');
    var Opcion;
    var CPU = Math.floor(Math.random() * (4 - 1)) + 1;
    console.log('Opcion'+CPU);

    if (CPU == 1){
        Opcion='Piedra';
    } else if (CPU == 2){
        Opcion='Papel';
    } else if (CPU == 3){
        Opcion='Tijeras';
    }
        
    if (jugador == CPU)    {
        result.innerHTML = "!! Es un empate !! ";
        maquina.innerHTML= "La CPU escogio "+Opcion;
    } else if (jugador == 1 && CPU == 3){
        result.innerHTML = "!! Ganaste con piedra !! ";
        maquina.innerHTML= "La CPU escogio "+Opcion;
    } else if (jugador == 2 && CPU == 1){
        result.innerHTML = "!! Ganaste con papel !! ";
        maquina.innerHTML= "La CPU escogio "+Opcion;
    } else if (jugador == 3 && CPU == 2){
        result.innerHTML = "!! Ganaste con tijera !! ";
        maquina.innerHTML= "La CPU escogio "+Opcion;
    } else
    result.innerHTML = "!! Lo siento, perdiste !!";
    maquina.innerHTML= "La CPU escogio "+Opcion;    
}