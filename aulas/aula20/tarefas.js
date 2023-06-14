
let tarefas = [];

function enviar(){
    let input = document.getElementById("texto")
    tarefas.push(input.value)
}

function visualizar(){
    console.log(tarefas)
}

function limpar(){
    tarefas = [];
}