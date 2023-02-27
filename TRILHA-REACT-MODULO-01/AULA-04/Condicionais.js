const idade = 25
let nota = 10

// if / else
if(idade > 18) {
    console.log("Maior que 18")
} else {
    console.log("Menor que 18")
}

// Switch
switch (nota) {
    case 0:
    case 1:
    case 2:
    case 3:
        console.log("Reprovado");
        break;
    case 4:
    case 5:    
    case 6:
        console.log("Recuperação");
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("Aprovado");
        break;
    default:
        console.log("Nota Inválida")
}

//Operador Ternário
nota > 6 ? console.log("Aprovado") : console.log("Reprovado");