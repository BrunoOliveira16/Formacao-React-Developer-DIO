# 📌 **Introdução ao Next.js**
## 🎯 **Objetivo**
Aprender sobre o que é o Next JS e quais seus diferenciais em relação ao react, e como podemos utiliza-lo.

<br>

## 🌐 **Pré-requisitos**
Editor de código (Visual Studio Code)

<br>

## 🏁 **Percurso**
### Etapa 1: O que é o Next JS
### Etapa 2: Navegação com Next
### Etapa 3: Autenticação com Next

<br>

## ✅ **Etapa 1: O que é o Next JS**
Next.js é um framework React com foco em produção e eficiência criado e mantido pela equipe da Vercel, o Nextjs busca reunir diversas funcionalidades como renderização hibrida e estática de conteúdo, suporte a TypeScript, pre-fetching, sistema de rotas, pacotes de funcionalidades e diversos plugins e exemplos para acelerar seu desenvolvimento fornecendo uma estrutura completa para você iniciar seu projeto.

Seu grande diferencial é a opção de conseguimos controlar o método de renderização que queremos em nossa aplicação, que são:
- SSR: Server-side Rendering;
- SPA: Single Page Application;
- SSG: Static Site Generation;

### SSR: Server-side Rendering
O grande diferencial no começo do Next.js foi a possibilidade de utilizar a renderização na parte do servidor (SSR) isto resolve um problema em aplicações e sites construídos com React que necessitam principalmente de SEO. Em algumas aplicações React você acabará percebendo que nem sempre é eficiente carregar todo o conteúdo na parte do cliente (client-side) que é o padrão do React.

### SPA: Single Page application
As SPA’s (Single Page Application) são aplicações Web que tem como objetivo trazer uma experiência similar a de um APP desktop para o usuário (sem os reloads e etc comuns aos sites), este é o método padrão utilizado pelo React.

### SSG: Static Site Generation
Next.js pré-renderiza páginas usando geração estática, o que, entre outras coisas, significa que ele não busca nenhum dado por padrão. Se você precisar gerar uma página que inclua esses dados. O SSG é recomendado para uso em qualquer página em que você precise pré-renderizar dados. Ele pode ser gerado antes que uma solicitação do usuário ocorra.

<br>

## ✅ **Etapa 2: Navegação com Next**

Criando um novo projeto com next:
```
npx create-next-app@latest next-app
```

Para executar o projeto, utilize o comando:
```
npm run dev
```

<br>

## ✅ **Etapa 3: Autenticação com Next**

- https://next-auth.js.org/