// Neste problema você deve ler um valor inteiro e 
//calcular o menor número possível de notas 
//nas quais o valor pode ser decomposto. 
//As notas possíveis são 100, 50, 20, 10,
// 5, 2 e 1. 
//Imprima o valor lido e a lista de notas.

// Entrada
// O arquivo de entrada contém um valor inteiro 
//N (0 < N < 1000000).

//Imprima o número lido e a quantidade mínima de 
//cada nota necessária em língua portuguesa,
// conforme exemplo dado. 
//Não se esqueça de imprimir o final da linha 
//após cada linha, caso contrário você receberá “Erro de apresentação” .

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(lines.shift());

console.log(valor)
// Notas de 100
let qtdNotas = parseInt(valor / 100)
let resto = valor % 100
console.log(`${qtdNotas} nota(s) de R$ 100.00`)

// Notas de 50
qtdNotas = parseInt(resto / 50)
resto = resto % 50
console.log(`${qtdNotas} nota(s) de R$ 50.00`)

// Notas de 20 
qtdNotas = parseInt(resto / 20)
resto = resto % 20
console.log(`${qtdNotas} nota(s) de R$ 20.00`)

// Notas de 10 
qtdNotas = parseInt(resto / 10)
resto = resto % 10
console.log(`${qtdNotas} nota(s) de R$ 10.00`)

// Notas de 5
qtdNotas = parseInt(resto / 5)
resto = resto % 5
console.log(`${qtdNotas} nota(s) de R$ 5.00`)

// Notas de 2
qtdNotas = parseInt(resto / 2)
resto = resto % 2
console.log(`${qtdNotas} nota(s) de R$ 2.00`)

// Notas de 1
qtdNotas = parseInt(resto / 1)
resto = resto % 1
console.log(`${qtdNotas} nota(s) de R$ 1.00`)



