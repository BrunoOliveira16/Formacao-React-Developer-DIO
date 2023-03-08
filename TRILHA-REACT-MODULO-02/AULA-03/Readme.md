# 📌 **Convenções e Qualidade de Código React**
## 🎯 **Objetivo**
Conhecer boas práticas em organização e qualidade de código.

<br>

## 🌐 **Pré-requisitos**
Editor de código (Visual Studio Code)

<br>

## 🏁 **Percurso**
### Etapa 1: Eslint
### Etapa 2: Prettier
### Etapa 3: Editor Config

<br>

## ✅ Etapa 1: Eslint
O ESLint é uma ferramenta de análise de código que, juntamente com a sua extensão de mesmo nome disponível no VSCode, permite identificar erros quanto ao padrão de escrita que definimos. Com ele você pode, por exemplo, definir que no seu código JavaScript as sentenças sempre terminarão com ponto e vírgula o que após o último elemento de um array sempre terá uma vírgula.

para instalar o ESlint, digite o comando abaixo e siga as instruções durante a instalação.
```
npm init @eslint/config
```
Instruções utilizadas:
- To check syntax, find problems, and enforce code style
- JavaScript modules (import/export)
- React
- Does your project use TypeScript? No
- Browser
- Use a popular style guide
- Airbnb: https://github.com/airbnb/javascript
- JSON

Após as instruções acima, foi realizada a instalação via ```yarn```

<br>

## ✅ Etapa 2: Prettier
É um formatador de código que visa ajudar os desenvolvedores a escrever aplicações que são mais fáceis de entender e mais uniformizadas entre as diversas formas de programar que existem.

A instalação do Prettier é feita em conjunto com o ESlint, digitando o comando abaixo:
```
yarn add eslint-config-prettier eslint-plugin-prettier prettier -D
```

Após a instalação, deverá ser modificado o arquivo ```.eslintrc.json```, com os seguintes códigos abaixo:
```
"extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "airbnb"
    ],
```

Após a alterar o arquivo anterior, crie na raiz do projeto o arquivo ```.pretierrc``` e digite as configurações abaixo dentro do arquivo criado:
```
{
    "semi": true,
    "tabWidth": 4,
    "printWitdh": 100,
    "singleQuote": true,
    "trailingComma": "none",
    "jsxBracketSameLine": true
}
```

<br>

## ✅ Etapa 3: Editor Config
Nada mais é do que um plugin que obriga o editor de código a seguir de forma prescrita os padrões macro essenciais de formatação configurados pelo usuário.

Em outras palavras, o editorConfig ajuda a estabelecer um estilo de código entre diferentes editores, independente da tecnologia utilizada.

crie um arquivo ```.editorconfig``` e digite as configurações básicas abaixo, dentro do arquivo:
```
root=true
end_of_line = lf
insert_final_newline = true
indent_size = 4
```

<br>

## 💻 Links Úteis

- https://editorconfig.org/

- https://prettier.io/

- https://eslint.org/