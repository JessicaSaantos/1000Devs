// Faça um programa que leia 3 valores inteiros e 
//apresente o maior seguido da mensagem 
//"eh o maior". Use a seguinte fórmula:
// maiorAB = a + b + abs(a - b) / 2
// Entrada
// O arquivo de entrada contém 3 valores inteiros.

// Saída
// Imprima o maior destes três valores seguido de um espaço e 
//da mensagem “eh o maior”.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let valorA = parseInt(lines[0])
let valorB = parseInt(lines[1])
let valorC = parseInt(lines[2])

function descobrirMaiorNumero(valor1, valor2){
    return (valor1 + valor2 + Math.abs(valor1 - valor2)) / 2
}

let MaiorAB = descobrirMaiorNumero(valorA, valorB)
let resultado = descobrirMaiorNumero(MaiorAB, valorC)

console.log(resultado + " eh o maior")