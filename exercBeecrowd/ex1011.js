var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valorPi =  3.14159;
let valorR = parseInt(lines.shift());
let resultado = (4/3.0) * valorPi * Math.pow(valorR, 3);

console.log("VOLUME = " + resultado.toFixed(3)); 