// Faça um programa que leia três valores de ponto flutuante:
// A, B e C. Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem base A e altura C.
// b) a área do círculo do raio C. (pi = 3,14159)
// c) a área do trapézio que tem A e B por base e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.

// Entrada
// O arquivo de entrada contém três valores duplos com um dígito após a vírgula decimal.

// Saída
// O arquivo de saída deve conter 5 linhas de dados.
// Cada linha corresponde a uma das áreas descritas acima, 
//sempre com uma mensagem correspondente (em português)
// e um espaço entre os dois pontos e o valor. 
//O valor calculado deve ser apresentado com 3 dígitos após a vírgula.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');

let valorA = parseFloat(lines[0])
let valorB = parseFloat(lines[1])
let valorC = parseFloat(lines[2])

// a área do triângulo retângulo 
function calcularAreaTrianguloRetangulo (base , altura){
    console.log("TRIANGULO: " + parseFloat((base * altura) / 2).toFixed(3))
}

// a área do círculo do raio
function calcularAreaCirculo(raio){
    let valorPi = (Math.PI).toFixed(5)
    let resultado = valorPi * Math.pow(raio, 2)
    console.log("CIRCULO: " +  resultado.toFixed(3))
}

// a área do trapézio
function calcularAreaTrapezio (baseA, baseB, altura){
    let bases = baseA + baseB 
    let resultado = (bases * altura) / 2
    console.log("TRAPÉZIO: " + resultado.toFixed(3))
}

//a área do quadrado
function calcularAreaQuadrado (valor){
    console.log("QUADRADO: " + Math.pow(valor, 2).toFixed(3))
}

//a área do retângulo
function calcularAreaRetangulo(base, altura){
    console.log("RETANGULO: " + (base * altura).toFixed(3))
}



calcularAreaTrianguloRetangulo(valorA, valorC)
calcularAreaCirculo(valorC)
calcularAreaTrapezio(valorA, valorB, valorC)
calcularAreaQuadrado(valorB)
calcularAreaRetangulo(valorA, valorB)
