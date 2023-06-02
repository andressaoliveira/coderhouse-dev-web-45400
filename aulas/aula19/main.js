const meuNome = "Andressa Oliveira"
const resultado = "Resultado da soma: "

const numero1 = 5
const numero2 = 7

let soma
let multiplicacao

soma = numero1 + numero2
multiplicacao = numero1 * numero2

// alert(resultado + soma)
//console.log("Resultado da Multiplicação: ", multiplicacao)





// CONDICIONAL
let sorvete = "flocos"

if (sorvete == "chocolate") {
    console.log("Sim, eu amo sorvete de chocolate!");
}
else if (sorvete == "morango") {
    console.log("Sorvete de morango é meu segundo favorito!")
}
else {
    console.log("Aaaah, mas chocolate é o meu favorito…");
}



// FUNÇÃO
function subtracao(numero1, numero2) {
    if (numero1 > numero2) {
        let resultado = numero1 - numero2
        return resultado;
    }
    else {
        return ("Não foi possível subtrair " + numero2 + " de " + numero1)
    }
}

let sub10e7 = subtracao(10, 7)
let sub4e7 = subtracao(4, 7)

console.log(sub10e7)
console.log(sub4e7)



//ARRAY
let meuArray = [1, 2, 3, 4];
meuArray.pop();
meuArray.push(5);
let nomesArray = ["Jacqueline", "Sophia", "Amanda"];


console.log(meuArray);
console.log(nomesArray[1]);




//OBJETO
const meuPrimeiroNome = "Andressa"
const meuEndereco = "Belo Horizonte"

let pessoa = {
    nome: meuPrimeiroNome,
    endereco: meuEndereco
}

console.log(pessoa)

let arraySubtracoes = [sub10e7, sub4e7]
console.log(arraySubtracoes)





//AARAY DE OBJETO
let maca = {
    nome: "maçã",
    cor: "vermelha",
    peso: 4,
    altura: 3,
    tipo: "fruta"
}

let alface = {
    nome: "alface",
    cor: "verde",
    peso: 4,
    altura: 3,
    tipo: "verdura"
}

let cenoura = {
    nome: "cenoura",
    cor: "laranja",
    peso: 4,
    altura: 3,
    tipo: "legume"
}

let alimentos = [maca, alface, cenoura];

alimentos.push(maca)
alimentos.push(alface)

console.log(alimentos)
console.log(alimentos[1].tipo, alimentos[1].cor)

alimentos.forEach(
    elemento => {
        let total = elemento.peso + elemento.altura
        console.log(total)
    }
)

let numeros = [1, 2, 3, 4, 5, 6];

function somatorio(valores) {
    let index = 0, resultado = 0;

    while (index < valores.length) {
        resultado = resultado + valores[index];
        index++;
    }

    console.log(resultado);
}

somatorio(numeros);
