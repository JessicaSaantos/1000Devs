// Leia 3 números de ponto flutuante. 
//Depois, imprima as raízes da fórmula de bhaskara.
// Caso seja impossível calcular as raízes 
//devido a uma divisão por zero ou raiz quadrada 
//de um número negativo, apresenta 
//a mensagem “Impossível calcular” .

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let valorA = parseFloat(lines[0])
let valorB = parseFloat(lines[1])
let valorC = parseFloat(lines[2])

let delta = (Math.pow(valorB, 2) - (4 * valorA * valorC))
let r1 = (- valorB + Math.sqrt(delta)) / (2 * valorA)
let r2 = (- valorB - Math.sqrt(delta)) / (2 * valorA)

if (delta > 0 && valorA > 0){
    console.log(`R1 = ${r1.toFixed(5)}`)
    console.log(`R2 = ${r2.toFixed(5)}`)
} else {
    console.log("Impossivel calcular")
}