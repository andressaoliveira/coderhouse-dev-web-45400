
//Cores
function mudarCor() {
    let conteudo = document.getElementById("conteudo");
    if (conteudo.className == "fundo-verde") {
        conteudo.className = "fundo-vermelho"
    }
    else {
        conteudo.className = "fundo-verde"
    }
}


//Incremento
function decrementar() {
    let valor = document.getElementById("valor-incremento")
    if (valor.innerText > 0) {
        valor.innerText--;
    }
}

function incrementar() {
    let valor = document.getElementById("valor-incremento")
    if (valor.innerText < 5) {
        valor.innerText++;
    }
}


//Divisível
function ehDivisivel() {
    let num1 = document.getElementById("numero1")
    let num2 = document.getElementById("numero2")
    let resultado = document.getElementById("resultado-divisivel")
    if (num1.value % num2.value == 0) {
        resultado.innerText = "É divisível"
    }
    else {
        resultado.innerText = "Não é divisível"
    }
}


//Mês
function verificarMes() {
    let numero = document.getElementById("numero-mes")
    console.log(numero.value == "1")
    let resultado = document.getElementById("resultado-mes")
    switch (numero.value) {
        case "1":
            resultado.innerText = "Janeiro";
            break;
        case "2":
            resultado.innerText = "Fevereiro";
            break;
        case "3":
            resultado.innerText = "Março";
            break;
        case "4":
            resultado.innerText = "Abril";
            break;
        case "5":
            resultado.innerText = "Maio";
            break;
        case "6":
            resultado.innerText = "Junho";
            break;
        case "7":
            resultado.innerText = "Julho";
            break;
        case "8":
            resultado.innerText = "Agosto";
            break;
        case "9":
            resultado.innerText = "Setembro";
            break;
        case "10":
            resultado.innerText = "Outubro";
            break;
        case "11":
            resultado.innerText = "Novembro";
            break;
        case "12":
            resultado.innerText = "Dezembro";
            break;
        default:
            resultado.innerText = "Valor de mês incorreto"
    }
}


//Contador
function contarPalavras() {
    let frase = document.getElementById("frase")
    let contador = document.getElementById("resultado-contador")

    let resultado = frase.value.split(" ")
    contador.innerText = resultado.length
}


