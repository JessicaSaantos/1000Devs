// Leia 4 valores inteiros A, B, C e D.
// Então, se B for maior que C e D for maior que A 
//e se a soma de C e D for maior que
// a soma de A e B 
//e se C e D forem valores
// positivos e se A for par, 
//escreva a mensagem “Valores aceitos” .
// Caso contrário, escreva a mensagem “Valores não aceitos” .

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let valorA = parseInt(lines[0])
let valorB = parseInt(lines[1])
let valorC = parseInt(lines[2])
let valorD = parseInt(lines[3])

let primeiraCondicao = valorB > valorC && valorD > valorA
let segundaCondicao = (valorC + valorD) > (valorA + valorB)
let terceiraCondicao = valorC > 0 && valorD > 0
let quartaCondicao = valorA % 2 == 0

if (primeiraCondicao && segundaCondicao && terceiraCondicao && quartaCondicao){
    console.log("Valores aceitos")
}
else {
    console.log("Valores não aceitos")
}