const alunos = [
    {
        nome:'Bruno',
        idade: 22
    },
    {
        nome:'Bianca',
        idade: 18
    }
]

alunos.push({
        nome: 'Bernardo',
        idade: 15
    },
    {
        nome: 'Camila',
        idade: 25
    },
    {
        nome: 'clara',
        idade: 15
    }
)

console.log(alunos[1].nome)
console.log(alunos)

//filter
const alunosFiltrados = alunos.filter(aluno => aluno.idade >= 18)
console.log(alunosFiltrados)
console.table(alunosFiltrados)

//find
const alunoBruno = alunos.find(alunos => alunos.nome === 'Bruno')
console.log(alunoBruno)

//findIndex
const alunoBrunoIndex = alunos.findIndex(alunos => alunos.nome === 'Bruno')
console.log(alunoBrunoIndex)

//reduce
const idades = alunos.reduce((acc, aluno)=> {
    return acc + aluno.idade
}, 0)
console.log(idades)

//some
const idadeMinima = alunos.some((alunos) => alunos.idade <= 10)
console.log(idadeMinima)

//every
const menorQueTrinta = alunos.every((alunos) => alunos.idade < 30)
console.log(menorQueTrinta)