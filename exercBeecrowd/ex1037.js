//Você deve fazer um programa que leia um número de 
//ponto flutuante e imprima uma mensagem dizendo 
//a qual dos seguintes intervalos o número pertence:
// [0,25] (25,50], (50,75], (75,100).
// Se a leitura número for menor que zero ou maior 
//que 100, o programa deverá imprimir a mensagem 
//“Fora de intervalo”.

//O símbolo '(' representa maior que. Por exemplo:
//[0,25] indica números entre 0 e 25,0000,
// incluindo ambos.
//(25,50] indica números maiores que 25 
//(25,00001) até 50,0000000.
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numero = parseFloat(lines[0])

if (numero < 0 || numero > 100){
    console.log("Fora de intervalo")
}
else {
    descobrirIntervalo(numero)
}


function descobrirIntervalo(numero){
    if (numero >= 0.0 && numero <= 25.0){
        console.log("Intervalo [0,25]")
    }
    else if (numero > 25.0 && numero <= 50.0){
        console.log("Intervalo (25,50]")
    }
    else if (numero > 50.0 && numero <= 75.0 ){
        console.log("Intervalo (50,75]")
    }
    else if (numero > 75.0 && numero <= 100.0 ){
        console.log("Intervalo (75,100]")
    }
}


