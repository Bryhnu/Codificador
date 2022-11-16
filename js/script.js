//infelizmente não consegui concluir a cifra de césar
let cesar = document.getElementById('cifraCesar') //input radio


//Codificar e decodificar Base64
let base64 = document.getElementById('base64') //input radio
let botaoCodifi = document.getElementById('botaoCodificar'); //botao para codificar
let botaoDecodifi = document.getElementById('botaoDecodificar'); //botao para decodificar
const mensagem = document.getElementById('mensagem'); //textarea da mensagem


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
const incremento = document.getElementById('esconderIncremento') //Div do incremento

cesar.addEventListener('click', function () {
    incremento.style.display = 'block'
});

base64.addEventListener('click', function () {

    incremento.style.display = 'none'
})






// mudar o botão
const codificar = document.getElementById('codificar'); //input radio
const decodificar = document.getElementById('decodificar'); //input radio


codificar.addEventListener('click', function () {

    botaoDecodifi.style.display = 'none'

    botaoCodifi.style.display = 'block'

})

decodificar.addEventListener('click', function () {

    botaoDecodifi.style.display = 'block'

    botaoCodifi.style.display = 'none'
})







