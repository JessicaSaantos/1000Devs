var valor = 5893 //substitua por um prompt() para receber os dados do teclado

console.log( parseInt(valor/1000) + " milhares" )

valor = valor % 1000 //ao inves de atribuir o valor 732 direto na variavel
            //pense em qual formula matemática consegue te dar o resultado
            //732 que é o resto que sobrou depois de tirar as milhares
console.log( parseInt(valor/100) + " centenas" )

valor = valor % 100  //ao inves de atribuir o valor 72 direto na variavel
            //pense em qual formula matemática consegue te dar o resultado
            //32 que é o resto que sobrou depois de tirar centenas
            
console.log( parseInt(valor/10) + " dezenas" )

valor = valor % 10   //ao inves de atribuir o valor 72 direto na variavel
            //pense em qual formula matemática consegue te dar o resultado
            //32 que é o resto que sobrou depois de tirar centenas
console.log( valor + " unidades" )