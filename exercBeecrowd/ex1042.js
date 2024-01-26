// Leia três números inteiros e classifique-os em ordem
// crescente. Após imprima esses valores em ordem 
//crescente, uma linha em branco e a seguir os valores 
//na sequência conforme foram lidos.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let a = parseInt(lines[0])
let b = parseInt(lines[1])
let c = parseInt(lines[2])

lines.sort(function (a, b) {
  return a - b ;
});


console.log(`${lines[0]}
${lines[1]}
${lines[2]}\n
${a}
${b}
${c}`);

// https://www.youtube.com/watch?v=JxdsTHdgqAU

