//Função auxiliar para simular os valores de entrada do exercicio
const entradas = [-3.5, 3.5, 11.0, 10.0];
let i = 0;
function gets () {
    const valor = entradas[i]
    i++
    return valor
}


//Exercio desafio de código 03
let somaDasNotas = 0; 
let contador = 0; 

do { 
     let notaEntradaConsole = parseFloat(gets()); 

     if (notaEntradaConsole >= 0 && notaEntradaConsole <= 10) {
       somaDasNotas += notaEntradaConsole;
       contador++;
     } else {
       console.log("nota invalida");
     }

}while (contador < 2); 

const media = somaDasNotas / 2;

console.log(`media = ${media.toFixed(2)}`)
