var cesar = document.getElementById('cifraCesar') //input radio
//infelizmente não consegui fazer a cifra de césar



//Codificar e decodificar Base64

var base64 = document.getElementById('base64') //input radio
var botaoCodifi = document.getElementById('botaoCodificar'); //botao para codificar
var botaoDecodifi = document.getElementById('botaoDecodificar'); //botao para decodificar
var mensagem = document.getElementById('mensagem'); //textarea da mensagem


function baseCodifica(){

    botaoCodifi.addEventListener('click', function (event) { 
        event.preventDefault();

        mensagem.value = btoa(mensagem.value)
    })


    botaoDecodifi.addEventListener('click', function (event) {
        event.preventDefault();

        mensagem.value = atob(mensagem.value)
    })

}



// Mostrar o incremento
var incremento = document.getElementById('esconderIncremento') //Div do incremento

cesar.addEventListener('click', function () {
    incremento.style.display = 'block'
});

base64.addEventListener('click', function () {

    incremento.style.display = 'none'
})




// mudar o botão
var codificar = document.getElementById('codificar'); //input radio
var decodificar = document.getElementById('decodificar'); //input radio


codificar.addEventListener('click', function () {

    botaoDecodifi.style.display = 'none'

    botaoCodifi.style.display = 'block'

})

decodificar.addEventListener('click', function () {

    botaoDecodifi.style.display = 'block'

    botaoCodifi.style.display = 'none'
})







