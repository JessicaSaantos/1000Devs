//Escreva um algoritmo que leia dois valores flutuantes (xey), 
//que devem representar as coordenadas de um ponto em um plano.
// A seguir, determine a qual quadrante o ponto pertence,
// ou se você está em um dos eixos cartesianos ou na origem
// (x = y = 0).

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let coordenadax = parseFloat(lines[0])
let coordenaday = parseFloat(lines[1])

if (coordenadax > 0 && coordenaday > 0){
    console.log("1º trimestre")
} else if (coordenadax < 0 && coordenaday > 0){
    console.log("2º trimestre")
} else if (coordenadax < 0 && coordenaday < 0){
    console.log("3º trimestre")
} else if (coordenadax > 0 && coordenaday < 0){
    console.log("4º trimestre")
} else if (coordenadax == 0 && coordenaday != 0){
    console.log("Eixo Y")
} else if (coordenadax != 0 && coordenaday == 0){
    console.log("Eixo X")
}  else {
    console.log("Origem")
}


