var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let notas = lines[0].split(' ')
let N1 = Number(notas[0])
let N2 = Number(notas[1])
let N3 = Number(notas[2])
let N4 = Number(notas[3])
let N5 = Number(lines[1])

function mediaPonderada(){
    return(((N1 * 2) + (N2 * 3) + (N3 * 4) + N4) / 10).toFixed(1)
}

function mediaFinal(){
    return (N5 + Number(mediaPonderada())) / 2
}

if (mediaPonderada() >= 7){
    console.log(`	
    Media: ${mediaPonderada()}
    Aluno aprovado.
    `)
}
else if (mediaPonderada() < 5){
    console.log(`	
    Media: ${mediaPonderada()}
    Aluno reprovado.
`)
}
else if (N5 >= 5){
    console.log(`	
    Media: ${mediaPonderada()}
    Aluno em exame.
    Nota do exame: ${N5}
    Aluno aprovado.
    Media final: ${mediaFinal().toFixed(1)}
    `)
}
else{
    console.log(`	
    Media: ${mediaPonderada()}
    Aluno em exame.
    Nota do exame: ${N5}
    Aluno reprovado.
    Media final: ${mediaFinal().toFixed(1)}
    `)
}
