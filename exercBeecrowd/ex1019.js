// Ler um valor inteiro, que é a duração em segundos 
//de um determinado evento em uma fábrica,
// e informá-lo expresso em horas:minutos:segundos.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let valorEmSeg = parseInt(lines.shift());

let horas = parseInt(valorEmSeg / 3600)
valorEmSeg = valorEmSeg % 3600

let minutos = parseInt(valorEmSeg / 60)
valorEmSeg = valorEmSeg % 60

let segundos = parseInt(valorEmSeg)

console.log(`${horas} : ${minutos} : ${segundos}`)