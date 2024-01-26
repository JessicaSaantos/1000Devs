var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let ordem

let matriz = [[]]

//para cada valor enviado pelo beecrowd 
//construa a matriz

while(true) {
    ordem = Number(lines.shift())

    if (ordem == 0) {
        break
    }
    
    //gerar os valores que serao utilizados como linhas
    for (let linha = 0; linha < ordem; linha++){
        let colunas = []
        //gerar os valores que serao utilizados como colunas
        for(let coluna = 0; coluna < ordem; coluna++){
            colunas[coluna] = identificarValorCelula(linha, coluna)
        }

        matriz[linha] = colunas
    }

    let maiorValor = matriz[ordem - 1][ordem - 1].toString().length

    for (let linha = 0; linha < ordem; linha++) {
        let textoLinha = '';
        for (let coluna = 0; coluna < matriz[linha].length; coluna++) {
            textoLinha += matriz[linha][coluna].toString().padStart(maiorValor, ' ') + ' ';
        }
        console.log(textoLinha.trimEnd());
    }
    console.log();
} 


function identificarValorCelula(linha, coluna){
    return Math.pow(2, linha + coluna)
}
