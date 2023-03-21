//Função auxiliar para simular os valores de entrada do exercicio
const entradas = [0, 1, 10, -1];
let i = 0;
function gets () {
    const valor = entradas[i]
    i++
    return valor
}


// Exercicio desafio de código 02
let n = parseInt(gets()); 
while(n != -1) { 
    if(n == 0) {
        console.log(0)
    } else {
        console.log(n - 1)
    }
    n = parseInt(gets());
}

