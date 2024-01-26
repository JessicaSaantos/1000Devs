// Leia os quatro valores correspondentes aos eixos x e y
// de dois pontos do plano, p1 (x1, y1) e 
//p2 (x2, y2) e calcule a distância entre eles,
// mostrando quatro casas decimais após a vírgula, 
//conforme a fórmula : raiz quadrada de (x2 - x1 ) ao
//quadrado + (y2 - y1) ao quadrado

// Entrada
// O arquivo de entrada contém duas linhas de dados. 
//O primeiro contém dois valores duplos: 
// x1 y1 e o segundo também contém dois valores duplos
// com um dígito após a vírgula: x2 y2 .

// Saída
// Calcule e imprima o valor da distância usando a 
//fórmula fornecida, com 4 dígitos após a vírgula.
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [x1, y1] = lines[0].split(' ').map(Number);
let [x2, y2] = lines[1].split(' ').map(Number);

let calculoDistanciaDosEixos = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))

console.log(calculoDistanciaDosEixos.toFixed(4))