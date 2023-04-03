# 📌 **Fundamentos do TypeScript**
## 🎯 **Objetivo**
Aprender sobre o que é o TypeScript e e porque usar em nosso projeto.

<br>

## 🌐 **Pré-requisitos**
Editor de código (Visual Studio Code)

<br>

## 🏁 **Percurso**
### Etapa 1: O que é o TypeScript
### Etapa 2: O porque usar TypeScript
### Etapa 3: Conceitos básicos sobre TS

<br>

## ✅ **Etapa 1: O que é o TypeScript**
TypeScript é um superset de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.

O TypeScript começou a ser desenvolvido pela Microsoft em 2012, com o objetivo de adicionar recursos e ferramentas que não estão presentes nativamente na linguagem (ou que seriam muito mais complexos de serem implementados), como tipagem estática (ou seja, os tipos das variáveis são definidos explicitamente no código) e orientação a objetos.

<br>

## ✅ **Etapa 2: O porque usar TypeScript**
O TypeScript nos traz diversos beneficios, mas podemos destacar o potencial de detecção de erros durante o desenvolvimento de projetos e a possibilidade de incluir a inteligência da IDE que está sendo usada. Isso reflete num ambiente muito mais ágil e seguro enquanto o código está sendo digitado pelo usuário.

E além de ser uma linguagem fortemente tipada, trazendo varios conceitos de orientação a objetos como: classes, heranças, emcapsulamento, interfaces...

<br>

## ✅ **Etapa 3: Conceitos básicos sobre TS**
### Tipagem estática
```
const nome: string = 'Bruno'
const idade: number = 30;
const estudante: boolean = true;
```

### Inferência de tipos
```
const nome = 'Bruno'
const idade = 30;
const estudante = true;
```

### Interfaces
```
interface IUsuario {
    nome: string;
    idade: number;
    estudante: boolean;
}

const usuario: IUsuario = {
    nome: 'Bruno',
    idade: 30,
    estudante: true
}
```

### Types
```
type IUsuario {
    nome: string;
    idade: number;
    estudante: boolean;
}

const usuario: IUsuario = {
    nome: 'Bruno',
    idade: 30,
    estudante: true
}
```

### enum
```
enum CARGO {
    DESENVOLVEDOR = 'desenvolvedor'
}

const usuario = {
    nome: 'Bruno',
    cargo: CARGO.DESENVOLVEDOR
}
```

<br>

## 💻 **Links Úteis**
- https://www.typescriptlang.org/