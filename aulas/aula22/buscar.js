
function buscarBandeira() {
    //busca o elemento input onde será digitado o país
    let paisDigitado = document.getElementById("paisDigitado")

    //monta a url que será usada para buscar os dados do pais
    let url = 'https://restcountries.com/v3.1/name/' + paisDigitado.value;

    fetch(url)
        .then(response => response.json())
        .then(response => exibirPais(response))
}


function exibirPais(pais) {
    //pega a div criada na tela
    let divImg = document.getElementById("bandeira")

    //limpa ela para exibir outra bandeira
    divImg.innerText = ""

    //cria o elemento do tipo imagem
    let bandeira = document.createElement("img")
    bandeira.src = pais[0].flags.png

    //insere a bandeira no div do html
    divImg.append(bandeira)
}