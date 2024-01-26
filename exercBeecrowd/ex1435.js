var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.trim().split('\n');



for (let i = 0; i < lines.length - 1; i ++){
    let ordem = lines[i]
    
    let matriz = criarMatriz(ordem)

    // Imprime a matriz sem as virgulas e com espaços
    for (let i = 0; i < ordem; i++) {
        let matrizOrganizada = '';
        for (let j = 0; j < matriz[i].length; j++) {
            matrizOrganizada += matriz[i][j].toString().padStart(3, ' ') + ' ';
        }
        console.log(matrizOrganizada);
    }
    console.log()
}

console.log()


function criarMatriz(ordem){
    let matriz = [[]]
    
    // montando a matriz
    for (let linha = 0; linha < ordem; linha ++){
        let vetor = []
        for (let coluna = 0; coluna < ordem; coluna ++){
            vetor[coluna] = 1
        }
        
        matriz[linha] = vetor;  
    }

    let valorInicial = lines.length
    let camadas = parseInt(valorInicial / 2)


    //percorrendo as camadas dentro da matriz para alterar valores correspondentes as camadas
    for (let camada = 1; camada <= camadas; camada ++){
        for (let lin = camada; lin < (matriz.length - camada); lin ++){
            for (let col = camada; col < (matriz.length - camada); col ++){
                matriz[lin][col]= (camada + 1)
            }
        }
    }


    return matriz
}

