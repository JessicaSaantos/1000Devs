// Calcule o consumo médio de um automóvel tendo em conta 
//a distância total percorrida (em Km) 
//e o total de combustível gasto (em litros).

// Entrada
// O arquivo de entrada contém dois valores: 
//um valor inteiro X
// representando a distância total (em Km)
// e o segundo é um número de ponto flutuante Y  
//representando o total de combustível irradiado,
// com um dígito após o ponto decimal.

// Saída
// Apresentar um valor que represente o consumo médio de um automóvel 
//com 3 dígitos após a vírgula, seguido da mensagem “km/l”.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let distanciaKm = parseInt(lines.shift())
let combustivel = parseFloat(lines.shift())

let consumoMedioKmPorL = (distanciaKm / combustivel).toFixed(3)

console.log(consumoMedioKmPorL + " km/l")