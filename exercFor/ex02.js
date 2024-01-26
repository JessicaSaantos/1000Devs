// Exercício 02: Escreva um aplicativo que recebe um número inteiro. 
// Mostre uma lista para os números pares e uma lista para os números ímpares separados por , 
// entre o número 1 até esse número inteiro fornecido pelo usuário.

const prompt = require("prompt-sync")()
let valor = parseInt(prompt('Digite um número: '));

let matrixPar = []
let matrixImpar = []

for (let i = 1; i <= valor; i ++){
    if (i % 2 == 0){
        matrixPar[i] = i
               
    }
    else {
        matrixImpar[i] = i
    }
}

let matrixParSemVazios = matrixPar.filter(function (i) {
    return i
})

let matrixImparSemVazios = matrixImpar.filter(function (i) {
    return i
})

console.log(`Números pares: ${matrixParSemVazios.join(' , ')}`)
console.log(`Números impares: ${matrixImparSemVazios.join(' , ')}`)