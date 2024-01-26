var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


let produto1 = lines[0].split(' ');
let produto2 = lines[1].split(' ');

let resultado =  (parseInt(produto1[1]) *  parseFloat(produto1[2])) + (parseInt(produto2[1]) *  parseFloat(produto2[2]));

console.log(produto1)
console.log(produto2)
console.log("VALOR A PAGAR: R$ " + resultado.toFixed(2));