var carta1 = {

    nome: "Lamborghini Aventador SVJ",
    imagem: "https://www.automaistv.com.br/wp-content/uploads/2018/08/Lamborghini-Aventador-SVJ-1.jpg",
    atributos: {

        velocidade: 350,
        design: 7,
        potencia: 770
    }
}

var carta2 = {

    nome: "Porsche 911 Turbo S",
    imagem: "https://carroscomcamanzi.com.br/wp-content/uploads/2020/03/Capa-911-1024x512.jpg",
    atributos: {

        velocidade: 330,
        design: 6,
        potencia: 650
    }
}

var carta3 = {

    nome: "Porsche Taycan Turbo S",
    imagem: "https://1.bp.blogspot.com/-Wwc6naDVyls/YAdnE443QrI/AAAAAAAAo6U/j6ew9WHHXUwtGyiZCZNyNoY8yzXpp9g8wCLcBGAsYHQ/s2048/Porsche-Taycan-2021-Brasil-preco%2B%25282%2529.jpg",
    atributos: {

        velocidade: 260,
        design: 8,
        potencia: 761
    }
}

var carta4 = {

    nome: "Ferrari 812 Superfast",
    imagem: "https://heycar.com.br/images/2017/Maio/Ferrari-812-Superfast-2018.jpg",
    atributos: {

        velocidade: 340,
        design: 8,
        potencia: 800
    }
}

var carta5 = {

    nome: "Mclaren 720 Spider",
    imagem: "https://a-static.besthdwallpaper.com/mclaren-720s-spider-2019-02-papel-de-parede-58978_L.jpg",
    atributos: {

        velocidade: 341,
        design: 9,
        potencia: 720
    }
}

var carta6 = {

    nome: "Ferrari F8 Spider",
    imagem: "https://squir.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/f/e/ferrari_f8_spider_2020_0000.jpg",
    atributos: {

        velocidade: 340,
        design: 9,
        potencia: 720
    }
}

var carta7 = {

    nome: "Lamborghini Huracan",
    imagem: "https://s2.glbimg.com/ok_hAXxmpfPIjNfY8KljUAUwstQ=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/x/f/QFDrleRJCNQwmhk0GCHg/2019-01-08-lamborghini-huracan-evo-2019-1600-01.jpg",
    atributos: {

        velocidade: 325,
        design: 10,
        potencia: 640
    }
}

var carta8 = {

    nome: "Aston Martin V12 Vantage S",
    imagem: "https://www.razaoautomovel.com/wp-content/uploads/2017/11/Aston-Martin_V12-Vantage_S_925x520_acf_cropped.jpg",
    atributos: {

        velocidade: 205,
        design: 5,
        potencia: 540
    }
}

var carta9 = {

    nome: "Mclaren 600LT",
    imagem: "https://www.razaoautomovel.com/wp-content/uploads/2018/06/mclaren-600lt-3.jpg",
    atributos: {

        velocidade: 328,
        design: 8,
        potencia: 600
    }
}

var carta10 = {

    nome: "Apollo Arrow",
    imagem: "https://s2.glbimg.com/aYtwvO5RzM8o4WSVj040EPft5Ro=/0x0:620x400/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/O/n/z2GAVsTdqV4SyjbFcrfQ/2016-03-03-000.png",
    atributos: {

        velocidade: 359,
        design: 10,
        potencia: 810
    }
}

var carta11 = {

    nome: "Bugatti Chiron",
    imagem: "https://cdn.motor1.com/images/mgl/6Lq0N/s3/bugatti-chiron-super-sport-2021.jpg",
    atributos: {

        velocidade: 420,
        design: 9,
        potencia: 950
    }
}

var carta12 = {

    nome: "Lamborghini Veneno",
    imagem: "https://www.gran-turismo.com/gtsport/livery/7062229156644291601_23.jpg",
    atributos: {

        velocidade: 355,
        design: 8,
        potencia: 810
    }
}

//Guardando os objetos dentro de um array
var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, 
carta7, carta8, carta9, carta10, carta11, carta12]

//inicializando as variaveis
var cartaMaquina = 0
var cartaJogador = 0
var pontosJogador = 0
var pontosMaquina = 0

//função para sortear a carta do jogador e da máquina
function  sortearCarta() {

    var numeroAleatorioMaquina = parseInt(Math.random() * cartas.length)
    var numeroAleatorioJogador = parseInt(Math.random() * cartas.length)

    while (numeroAleatorioMaquina == numeroAleatorioJogador) {

        numeroAleatorioJogador = parseInt(Math.random() * cartas.length)

      }

      cartaJogador = cartas[numeroAleatorioJogador]
      cartas.splice(numeroAleatorioJogador, 1)
      cartaMaquina = cartas[numeroAleatorioMaquina]
      cartas.splice(numeroAleatorioMaquina, 1)

      document.getElementById("btnSortear").disabled = true
      document.getElementById("btnJogar").disabled = false  

      exibirOpcoes()
      exibirCartaJogador()
}

//função para exibir as opções de radiobutton
function exibirOpcoes() {

    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""

    for(var atributo in cartaJogador.atributos) {

        opcoesTexto += "<input type= 'radio' name= 'atributo' value= '" + atributo + ">" + atributo
    }
    opcoes.innerHTML = opcoesTexto
 
}

//função para deixar marcado a opção de radiobutton
function obtemAtributoSelecionado() {

    var radioAtributos = document.getElementsByName("atributo")
    
        for (var i = 0; i < radioAtributos.length; i++) {
  
            if (radioAtributos[i].checked == true) {
    
                return radioAtributos[i].value
      }
    }
  }

//função do jogo em si. Fazendo as comparações da carta do jogador com a da máquina 
function jogar() {

  var atributoSelecionado = obtemAtributoSelecionado()
  var divResultado = document.getElementById("resultado")
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

  if (valorCartaJogador > valorCartaMaquina) {
      pontosJogador++

      htmlResultado = "<p class='resultado-final'>Voce Venceu o Jogo!</p>"

  } else if (valorCartaJogador < valorCartaMaquina) {
      pontosMaquina++

      htmlResultado = "<p class='resultado-final'>Voce Perdeu o Jogo!!</p>"

  } else {

    htmlResultado = "<p class='resultado-final'>O Jogo terminou em empate!!</p>"
    pontosJogador++;
    pontosMaquina++;

  }

  exibirCartaMaquina()
  divResultado.innerHTML = htmlResultado

  document.getElementById("btnJogar").disabled = true
  document.getElementById("btnProxima").disabled = false

  pontuacao()


  //comparação da pontuação do jogador
  if (pontosJogador >= 3) {

    divResultado.innerHTML = "Parabéns você venceu o jogo, Voce é um excelente jogador de Trunfo!!"
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnProxima").disabled = true
    document.getElementById("btnSortear").disabled = true

  }

  //comparação da pontuação da máquina
  if (pontosMaquina >= 3) {

    divResultado.innetHTML = "Que pena, você perdeu o jogo...Voce precisa jogar mais Trunfo para vencer na próxima!!"
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnProxima").disabled = true
    document.getElementById("btnSortear").disabled = true

  }
 
}

//função que mostra a pontuação do jogador e da máquina
function pontuacao() {

    var pontos = document.getElementById("pontos")
    pontos.innerHTML = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

}

//função que exibe a carta do jogador
function exibirCartaJogador() {

    var divCartaJogador = document.getElementById("carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png"
    style=" width: inherit; height: inherit; position: absolute;">`

    var opcoesTexto = ""

    for(var atributo in cartaJogador.atributos) {

        opcoesTexto += "<input type='radio' name='atributo' checked value= '" + atributo + ">" + atributo +  " " +
        cartaJogador.atributos[atributo] + "<br>" 
    }

    var tagHTML = `<div id="opcoes" class="carta-status">`

    var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + `</div>`

}

//função que exibe a carta da máquina
function exibirCartaMaquina() {

    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
   
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'

    var tagHTML = "<div id='opcoes' class='carta-status --spacing'>"
  
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + 
        cartaMaquina.atributos[atributo] + "</p>"
    }

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"

}

//função para continuar o jogo 
function proximaRodada() {
 
    var resultadoBranco = document.getElementById("resultado")
    resultadoBranco.innerHTML = ""
    var jogadorBranco = document.getElementById("carta-jogador")
    jogadorBranco.innerHTML = ""
    var maquinaBranco = document.getElementById("carta-maquina")
    maquinaBranco.innerHTML = ""
    var divCartas = document.getElementById("cartas")
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  
    document.getElementById("btnSortear").disabled = false
    document.getElementById("btnJogar").disabled = true
    document.getElementById("btnProxima").disabled = true
}

//função para reiniciar o jogo
function reiniciarJogo() {

    proximaRodada()
    var resultadoBranco = document.getElementById("pontos")
    resultadoBranco.innerHTML = ""
    pontosMaquina = 0
    pontosJogador = 0

}