let tarefas = [];


//inserir dados no array
let botaoEnviar = document.getElementById("enviar")
botaoEnviar.addEventListener("click", acaoEnviar)

let entrada = document.getElementById("entrada");

function acaoEnviar() {
    tarefas.push(entrada.value)
}


//visualizar o array
let botaoVisualizar = document.getElementById("visualizar")
botaoVisualizar.addEventListener("click", acaoVisualizar)

function acaoVisualizar() {
    console.log(tarefas)
}


//limpar o array
let botaoLimpar = document.getElementById("limpar")
botaoLimpar.addEventListener("click", acaoLimpar)

function acaoLimpar() {
    tarefas = [];
    console.log(tarefas);
}
