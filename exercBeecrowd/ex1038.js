// Usando a tabela a seguir, escreva um programa que leia um código e 
//a quantidade de um item. Depois imprima o valor a pagar. 
//Este é um programa muito simples com o único intuito de praticar
// comandos de seleção.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let codigo = parseInt(lines[0])
let quantidade = parseInt(lines[1])

switch(codigo){
    case 1:
        console.log(`Total: R$ ${parseFloat(quantidade * 4.00).toFixed(2)}`)
        break
    case 2:
        console.log(`Total: R$ ${parseFloat(quantidade * 4.50).toFixed(2)}`)
        break
    case 3:
        console.log(`Total: R$ ${parseFloat(quantidade * 5.00).toFixed(2)}`)
        break
    case 4:
        console.log(`Total: R$ ${parseFloat(quantidade * 2.00).toFixed(2)}`)
        break
    case 5:
        console.log(`Total: R$ ${parseFloat(quantidade * 1.50).toFixed(2)}`)
        break
    
}

