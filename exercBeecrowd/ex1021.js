// Leia um valor de ponto flutuante com duas casas decimais. 
// Isso representa um valor monetário. Depois disso, 
// calcule o menor número possível de notas e moedas nas quais o valor pode ser decomposto. 
// As notas consideradas são de 100, 50, 20, 10, 5, 2. 
// As moedas possíveis são de 1, 0,50, 0,25, 0,10, 0,05 e 0,01. 
// Imprima a mensagem “NOTAS:” seguida da lista de notas e a mensagem “MOEDAS:” 
// seguida da lista de moedas.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valor = parseFloat(lines.shift());

console.log("NOTAS: ")

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

console.log("MOEDAS: ")
// Moeda de 1.00
let qtdMoeda = parseInt(resto / 1)
resto = resto % 1
console.log(`${qtdMoeda} moeda(s) de R$ 1.00`)

//para contornar o problema dos números fracionarios
//multiplica por 100 e arredonda
resto = parseInt(resto * 100)

// Moeda de 0.50
qtdMoeda = parseInt(resto / 50)
resto = resto % 50
console.log(`${qtdMoeda} moeda(s) de R$ 0.50`)

// Moeda de 0.25
qtdMoeda = parseInt(resto / 25)
resto = resto % 25
console.log(`${qtdMoeda} moeda(s) de R$ 0.25`)

// Moeda de 0.10
qtdMoeda = parseInt(resto / 10)
resto = resto % 10
console.log(`${qtdMoeda} moeda(s) de R$ 0.10`)

// Moeda de 0.05
qtdMoeda = parseInt(resto / 5)
resto = resto % 5
console.log(`${qtdMoeda} moeda(s) de R$ 0.05`)

// Moeda de 0.01
qtdMoeda = parseInt(resto / 1)
resto = resto % 1
console.log(`${qtdMoeda} moeda(s) de R$ 0.01`)