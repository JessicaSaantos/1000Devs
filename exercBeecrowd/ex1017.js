// O Joãozinho quer calcular e mostrar a quantidade de litros 
//de combustível gasto numa viagem, 
//utilizando um carro que faz 12 Km/L. 
//Para isso, ele gostaria que você o ajudasse através de um 
//programa simples. Para realizar o cálculo, 
//é necessário ler o tempo gasto (em horas) 
//e a mesma velocidade média (km/h).
// Dessa forma, você consegue calcular a distância e 
//depois calcular quantos litros seriam necessários. 
//Mostre o valor com três casas decimais após o ponto.

// Entrada
// O arquivo de entrada contém dois inteiros. 
//O primeiro é o tempo gasto na viagem (em horas). 
//A segunda é a velocidade média durante a viagem (em Km/h).

// Saída
// Imprima quantos litros seriam necessários para fazer esta viagem, 
//com três dígitos após a vírgula.

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let tempoViagem = parseInt(lines[0])
let velocidadeMedia = parseInt(lines[1])
const kmPorL = 12
let kmPorH = velocidadeMedia * tempoViagem
let litrosNecessarios = kmPorH / kmPorL

console.log(litrosNecessarios.toFixed(3))