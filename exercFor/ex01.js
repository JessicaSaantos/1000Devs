// Exercício 01: Faça um programa que receba a idade de 15 pessoas e que calcule e mostre:

// a) A quantidade de pessoas em cada faixa etária;
// b) A percentagem de pessoas em cada faixa etária em relação ao total de pessoas: 

// Até 15 anos
// De 16 a 30 anos
// De 31 a 45 anos
// De 46 a 60 anos
// Acima de 61 anos

const prompt = require("prompt-sync")()

let primeiraFaixa = 0, segundaFaixa = 0, terceiraFaixa = 0, quartaFaixa = 0, ultimaFaixa =0
let matrix = []

for (let i = 0; i < 15; i ++){
    let valor = Number(prompt('Digite um número: '));
     matrix[i] = valor

     if (matrix[i] <= 15){
        primeiraFaixa += 1
        }
        else if (matrix[i] >= 16 && matrix[i] <= 30){
            segundaFaixa += 1
        } 
        else if (matrix[i] >= 31 && matrix[i] <= 45){
            terceiraFaixa += 1
        }
        else if (matrix[i] >= 46 && matrix[i] <= 60){
            quartaFaixa += 1
        }
        else {
            ultimaFaixa += 1
        }

    }

    function calcularPorcentagem(number) {
        let porcentagem = (number / 15) * 100
        return porcentagem.toFixed(0)
    }

    

console.log(
    `Há ${primeiraFaixa} pessoas de até 15 anos, \n ${segundaFaixa} pessoas de 16 a 30 anos, \n ${terceiraFaixa} pessoas de 31 a 45 anos, \n ${quartaFaixa} pessoas 46 a 60 anos, \n ${ultimaFaixa} pessoas de 61 anos ou +`
    )

    console.log(
        `Há ${calcularPorcentagem(primeiraFaixa)} % pessoas de até 15 anos, \n ${calcularPorcentagem(segundaFaixa)} % pessoas de 16 a 30 anos, \n ${calcularPorcentagem(terceiraFaixa)} % pessoas de 31 a 45 anos, \n ${calcularPorcentagem(quartaFaixa)} % pessoas 46 a 60 anos, \n ${calcularPorcentagem(ultimaFaixa)} % pessoas de 61 anos ou +`
        )





    
