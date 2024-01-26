var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 let numeroFuncionarios = parseInt(lines.shift());
 let horasTrabalhadas = parseInt(lines.shift());
 let valorRecebido = parseFloat(lines.shift());
 
 let salario = horasTrabalhadas * valorRecebido;
 
 console.log("NUMBER = " + numeroFuncionarios + "\n" + "SALARY = U$ " + salario.toFixed(2));