// Ler um valor inteiro correspondente 
//à idade de uma pessoa (em dias) e 
//imprimi-lo em anos, meses e dias, 
//seguido da respectiva mensagem “ano(s)”,
// “mes(es)”, “dia(s)”.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let idadeEmDias = parseInt(lines.shift());

let qtdAnos = parseInt(idadeEmDias / 365)
idadeEmDias = idadeEmDias % 365

let qtdMeses = parseInt(idadeEmDias / 30)
idadeEmDias = parseInt(idadeEmDias % 30)

console.log(`${qtdAnos} ano(s) ${qtdMeses} mes(es) ${idadeEmDias} dia(s)`)