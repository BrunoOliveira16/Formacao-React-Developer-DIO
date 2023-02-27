//for
for(let i = 1; i <= 10; i++) {
    console.log(`${i} x 5 = ${i * 5}`)
}

console.log("")

// While
let x = 1
while(x <= 10) {
    console.log(`${x} x 5 = ${x * 5}`);
    x++;
}

console.log("")

//foreach
const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
valores.forEach((value) => {
    console.log(`${value} x 5 = ${value * 5}`)
})

console.log("")

//map
const valores2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const resultado = valores2.map((value) => {
    return value * 5
})

console.log(resultado)