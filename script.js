let duvidas = document.querySelectorAll('.duvida');

console.log(duvidas)

duvidas.forEach(function(duvida){
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })
})