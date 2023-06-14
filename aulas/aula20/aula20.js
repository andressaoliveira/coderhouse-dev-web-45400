console.log(document.head)

let div = document.getElementById("app")
console.log(div)

let paragrafo = document.getElementById("paragrafo1")
console.log(paragrafo)

let entrada = document.getElementById("entrada");
console.log(entrada.value)

let paises = document.getElementsByClassName("paises")
console.log(paises[2])

let radioCheked = document.querySelector("input[name=genero]:checked")
console.log(radioCheked.value)






let titulo = document.getElementById("titulo")
console.log(titulo.innerText)

titulo.innerText = "Olá, Coder!!!"
console.log(titulo.innerText)

let container = document.getElementById("container")
container.innerHTML = "<h2>Olá</h2> <p>Boa noite<p>"








//opção 1
let botao1 = document.getElementById("botao1")
botao1.addEventListener("click", acaoClique)

function acaoClique(){
    console.log("Clicou no botão 1")
}

//opção 2
let botao2 = document.getElementById("botao2")
botao2.onclick = () => {
    console.log("Clicou no botão 2")
}

//opção 3
function acaoCliqueBotao3(){
    console.log("Clicou no botão 3")
}

