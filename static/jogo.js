
var altura = 0
var largura = 0
var vidas = 3
var tempo = 15

var CriaPlanetaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'Normal'){
    //1500
    CriaPlanetaTempo = 1700
    tempo = 10
} else if(nivel === 'Dificil'){
    //1000
    CriaPlanetaTempo = 1250
    tempo = 20
} else if(nivel === 'Tita'){
    //650
    CriaPlanetaTempo = 750
    tempo = 40
}


       function AjustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura,largura)

}
        AjustaTamanhoPalcoJogo()

        var cronometro = setInterval(function(){
            tempo -= 1
            if(tempo < 0){
                clearInterval(cronometro)
                clearInterval(CriaPlaneta)
                window.location.href = 'vitoria.html'
            }else{
            document.getElementById('cronometro').innerHTML = tempo
        }
        }, 1000)

        function PosicaoRandomica() {

        //remover planeta anterior (caso exista)
        if(document.getElementById('planeta')){
    document.getElementById('planeta').remove()

        if(vidas < 1){
            window.location.href = 'fim_de_jogo.html'
        } else{

    document.getElementById('v' + vidas).src = "static/imagens/coracao_vazio.png"
    vidas--
}
}

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
            posicaoX = posicaoX < 0 ? 0 : posicaoX
            posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //criar o elemento HTML
    var planeta = document.createElement('img')
    planeta.src = ImagemAleatoria()
    planeta.className = TamanhoAleatorio() + ' ' + LadoAleatorio()
    planeta.style.left = posicaoX + 'px'
    planeta.style.top = posicaoY + 'px'
    planeta.style.position = 'absolute'
    planeta.id = 'planeta'
    planeta.onclick = function() {
        this.remove()
    }

    document.body.appendChild(planeta)

}

        function TamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0: 
            return 'planeta1'

        case 1: 
            return 'planeta2'

        case 2: 
            return 'planeta3'
    }
        }

        function ImagemAleatoria(){
    var classe = Math.floor(Math.random() * 4)

    switch(classe) {
        case 0: 
            return 'static/imagens/jupeter.png'

        case 1: 
            return 'static/imagens/Saturno.png'

        case 2: 
            return 'static/imagens/urano.png'

        case 3: 
            return 'static/imagens/netuno.png'
    }
        }

        function LadoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe) {
        case 0: 
            return 'LadoA'

        case 1: 
            return 'LadoB'
    }
        }
