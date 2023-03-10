# 📌 **Primeira Aplicação em React**
## 🎯 **Objetivo**
Criar nossa primeira aplicação React e consumir dados
externo.

<br>

## 🌐 **Pré-requisitos**
- Editor de código (Visual Studio Code)
- Conhecimento básico de React

<br>

## 🏁 **Percurso**
### Etapa 1: Criando projeto com React CLI
### Etapa 2: Organizando pastas/arquivos
### Etapa 3: Criando interface da aplicação GitFind
### Etapa 4: Requisições com Fetch

<br>

## ✅ Etapa 1: Criando projeto com React CLI
Para está etapa inicial foi criado um projeto novo com o seguinte código abaixo:
```
npx create-react-app gitfind
```

<br>

## ✅ Etapa 2: Organizando pastas/arquivos
Nesta etapa foi criada a seguinte estrutura de páginas dentro de ```src```:

- src
    - components
        - Header
        - Input
        - Button
    - pages
        - Home

Também foi atualizado local do arquivo index.js da página Home em Index.js principal.
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
> Pelo fato do arquivo dentro de Home também ser chamado de Index, não se faz necessário declarar ele no Index principal, somente a sua pasta de origem.

<br>

## ✅ Etapa 3: Criando interface da aplicação GitFind
### Etapa 01

<br>

## ✅ Etapa 4: Requisições com Fetch
Para a requisição via api do github, foi utilizado os endpoints abaixo:
```
https://api.github.com/users/BrunoOliveira16

https://api.github.com/users/BrunoOliveira16/repos
```

<br>

## 💻 Links Úteis

- https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch