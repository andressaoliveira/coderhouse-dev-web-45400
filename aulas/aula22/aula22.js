fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
// .then(response => console.log(response))





// let cep = prompt("Digite o cep:")
let cep = '30840492'
let url = "https://viacep.com.br/ws/" + cep + "/json/"

// console.log(url)
fetch(url)
    .then(response => response.json())
// .then(response => exibir(response))

function exibir(dados) {
    console.log(dados)
}






let paisDigitado = prompt("Digite o Pais:")

fetch('https://restcountries.com/v3.1/name/' + paisDigitado)
    .then(response => response.json())
    .then(response => exibirPais(response))

function exibirPais(pais) {
    console.log(pais)
    // let nome = pais[0].name.nativeName.por.common
    // console.log(nome)

    // console.log(pais[0].name.nativeName.por.official)

    let capital = pais[0].capital[0]
    console.log(capital)

    let titulo = document.createElement("h1")
    titulo.innerText = capital
    document.body.append(titulo)

    let bandeira = document.createElement("img")
    bandeira.src = pais[0].flags.png
    document.body.append(bandeira)
}