// Exercício 03: Faça um programa que recebe a quantidade de caracteres da base de um triangulo e 
// imprima este triângulo utilizando asteriscos. 
// Quando for fornecido um número que não permita a construção do triângulo perfeito, 
// uma mensagem deverá ser exibida informando.
// Exemplos: 
// Entrada: 9

//     *
//    ***
//   *****
//  *******
// *********

// Entrada: 5

//   *
//  ***
// *****

const prompt = require("prompt-sync")()
let base = parseInt(prompt('Insira a base da pirâmide: '));
let qtdEspacos = parseInt(base / 2) + 1

for (let linha = 1; linha <= qtdEspacos; linha ++ ){
    let coluna = "";
    for (let colunas = (qtdEspacos + 1) - linha; colunas > 1; colunas --){
        coluna += " "
    }
    let asteriscos = "";
    for (let qtdAsteriscos = 1; qtdAsteriscos <= (linha * 2) - 1; qtdAsteriscos ++){
        asteriscos += "*"
    }
    console.log(coluna + asteriscos)
    
}