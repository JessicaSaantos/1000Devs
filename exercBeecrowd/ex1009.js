var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let nome = lines.shift();
let salarioFixo = parseFloat(lines.shift());
let totalVendas = parseFloat(lines.shift());

let total = salarioFixo + ((15/100) * totalVendas);

console.log("TOTAL = R$ " + total.toFixed(2));