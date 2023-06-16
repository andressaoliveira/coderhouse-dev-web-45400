let tarefas = []; // 0 1 2


//inserir dados no array
let botaoEnviar = document.getElementById("enviar")
botaoEnviar.addEventListener("click", acaoEnviar)

function acaoEnviar() {
    let entrada = document.getElementById("entrada")
    tarefas.push(entrada.value)
    entrada.value = ""
}


//visualizar o array
let botaoVisualizar = document.getElementById("visualizar")
botaoVisualizar.addEventListener("click", acaoVisualizar)

function acaoVisualizar() {
    console.log(tarefas)
    let resultado = document.getElementById("resultado")
    resultado.innerText = ""
    for (let i = 0; i < tarefas.length; i++){
        let elemento = document.createElement("li")
        elemento.innerText = tarefas[i]       
        resultado.append(elemento)
    }
}


//limpar o array
let botaoLimpar = document.getElementById("limpar")
botaoLimpar.addEventListener("click", acaoLimpar)

function acaoLimpar() {
    tarefas = [];
    acaoVisualizar()
}
