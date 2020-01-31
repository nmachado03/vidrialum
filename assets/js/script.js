let icono = document.getElementById('icono')
let enlaces = document.getElementById('enlaces')
let contador = false

icono.addEventListener("click", function(){
    if(contador == false){
        enlaces.className = ('enlaces dos')
        contador=true
    }else{
        enlaces.classList.remove('dos')
        enlaces.className = ('enlaces uno')
        contador = false
    }
})
