// Criar elementos
let p = document.createElement("p")
p.className = "paragrafo"
p.id = "hello"


let hello = document.createElement("h2")
// Inserir texto ao elemento
hello.innerText = "Hello World!"
// console.log(hello)


// Adicionar elementos
p.append(hello)
console.log(p)

document.body.append(p)

function eliminar() {
    let paragrafo = document.getElementById("paragrafo")
    paragrafo.remove()

    let paises = document.getElementsByClassName("paises")
    paises[1].remove()
}




//localStorage

const meuNome = 'maria';

// salvando no local storage
localStorage.setItem('nome', meuNome);

// buscando a informação no local storage
const nomeResultado = localStorage.getItem('nome');
console.log(nomeResultado)
// remoção da informação do local storage
// localStorage.removeItem('nome')





const aluno = {
    nome: 'Maria',
    sobrenome: 'Silva'
};

// conversão para string, localstorage só aceita string
const alunoString = JSON.stringify(aluno);
console.log(alunoString)
localStorage.setItem('aluno', alunoString);

// conversão para json 
const alunoBusca = localStorage.getItem('aluno');
console.log(alunoBusca)
console.log(alunoBusca.nome)


const alunoResultado = JSON.parse(alunoBusca)
console.log(alunoResultado)
console.log(alunoResultado.nome)