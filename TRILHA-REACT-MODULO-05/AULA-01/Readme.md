# 📌 **Dominando Conceitos e Ferramentas Avançadas do React**
## 🎯 **Objetivo**
Aprenderemos a utilizar ferramentas mais avançadas dentro da nossa aplicação React, melhorando a organização, separando as responsabilidades do nosso código.

<br>

## 🌐 **Pré-requisitos**
Editor de código (Visual Studio Code)

<br>

## 🏁 **Percurso**
### Etapa 1: Context API
### Etapa 2: Custom Hooks

<br>

## ✅ **Etapa 1: Context API**
No React, quando precisamos que um componente filho tenha os dados do pai, precisamos informar esses dados e funções através das props no componente filho.

Com a chegada do Context API no React (a partir da versão 16) esse cenário é diferente, ao invés de passar esses dados através de props, criamos um context que armazena esses dados. Dessa forma, os componentes que precisam dessa informação podem consumi-las. Esse processo possui o mesmo princípio do Redux, sendo que o Context API é nativo no próprio React. Caso você já possua conhecimento prévio em Redux, será mais fácil entender e como usar o Context API, por conta que eles possuem a mesma filosofia, gerenciamento de estados.

### Porque o Context é útil?
O conceito de estado ficou complexo à medida que foi necessário compartilhar o estado dentro da aplicação de uma forma global entre os componentes. Para isso, algumas bibliotecas surgiram para resolver essa nova demanda, como o Redux e MobEx. O Redux é a biblioteca mais utilizada para gerenciamento de estados.

**O React context API é um gerenciador de estado global e é uma funcionalidade implementada a pouco tempo no ecossistema do React, podendo resolver 90% das soluções do Redux de forma extremamente simples.**

> A prática desta etapa foi realizado no arquivo no modulo 04 app-tela-login-ts

<br>

## ✅ **Etapa 2: Custom Hooks**
O React vem com vários Hooks embutidos como useState, useContexte useEffect. Às vezes, você desejará que houvesse um Hook para algum propósito mais específico: por exemplo, buscar dados, monitorar se o usuário está online ou se conectar a uma sala de bate-papo. Você pode não encontrar esses Hooks no React, mas pode criar seus próprios Hooks para as necessidades do seu aplicativo.

Os aplicativos React são construídos a partir de componentes. Os componentes são construídos a partir de Hooks, sejam integrados ou customizados. Você provavelmente usará Hooks personalizados criados por outras pessoas, mas ocasionalmente você mesmo pode escrever um!

Você deve seguir estas convenções de nomenclatura:

- Os nomes dos componentes do React devem começar com uma letra maiúscula, como StatusBare SaveButton. Os componentes do React também precisam retornar algo que o React sabe como exibir, como um pedaço de JSX.

- Os nomes dos ganchos devem começar com useseguido por uma letra maiúscula, como useState(embutido) ou useOnlineStatus(personalizado, como anteriormente na página). Ganchos podem retornar valores arbitrários.

Essa convenção garante que você sempre possa olhar para um componente e saber onde seu estado, efeitos e outros recursos do React podem “esconder”. Por exemplo, se você vir uma getColor()chamada de função dentro do seu componente, pode ter certeza de que ela não pode conter o estado React dentro porque seu nome não começa com use. No entanto, uma chamada de função como useOnlineStatus()provavelmente conterá chamadas para outros Hooks internos!

<br>

## 💻 **Links Úteis**

- https://react.dev/reference/react/useContext

- https://react.dev/learn/reusing-logic-with-custom-hooks