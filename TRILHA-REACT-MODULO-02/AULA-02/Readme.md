# 📌 **Conceitos Fundamentais para React**
## 🎯 **Objetivo**
Entender os conceitos fundamentais de como o react funciona.

<br>

## 🌐 **Pré-requisitos**
Editor de código (Visual Studio Code)

<br>

## 🏁 **Percurso**
### Etapa 1: JSX
### Etapa 2: Componentes de classes e funcionais no React
### Etapa 3: Ciclo de vida dos componentes

<br>

## ✅ **Etapa 1: JSX**
JSX é uma forma de criar elementos para serem utilizadas como templates de aplicações React.
Basicamente, os elementos criados com o JSX são bem similares com código HTML e fornecem aos
desenvolvedores uma forma mais simples e intuitiva de criar os componentes de uma aplicação.

<br>

## ✅ **Etapa 2: Componentes de classes e funcionais no React**
Os componentes permitem que você divida a interface do usuário em partes independentes e reutilizáveis e pense em cada parte isoladamente. Esta página fornece uma introdução à ideia de componentes. Você pode encontrar uma <a href="https://pt-br.reactjs.org/docs/react-component.html">referência detalhada da API do componente aqui.</a>

Conceitualmente, componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas “props”) e retornam elementos React que descrevem o que deve aparecer na tela.

### Componentes de Função e Classe
A maneira mais simples de definir um componente é escrever uma função JavaScript:
```
function Welcome(props) {
  return <h1>Olá, {props.name}</h1>;
}
```
Essa função é um componente React válido porque aceita um único argumento de objeto “props” (que significa propriedades) com dados e retorna um elemento React. Nós chamamos esses componentes de “componentes de função” porque são literalmente funções JavaScript.

Você também pode usar uma classe ES6 para definir um componente:
```
class Welcome extends React.Component {
  render() {
    return <h1>Olá, {this.props.name}</h1>;
  }
}
```
Os dois componentes acima são equivalentes do ponto de vista do React.

Modificação realizada no projeto-exemplo
```
import React, { useState } from "react";

const App = ()=> {
    const [usuarios, setUsuarios] = useState(["Bruno", "Bianca", "Bernardo"])

    useEffect(() => {
        setTimeout(() => {
            setUsuarios([...usuarios, "Janaina"]);
        }, 3000);
    }, []);

    return (
        <div className="App">
            <h1></h1>
            {usuarios.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    );
};

export default App;
```

<br>

## ✅ **Etapa 3: Ciclo de vida dos componentes**
Em aplicações com muitos componentes, é muito importante limpar os recursos utilizados pelos componentes quando eles são destruídos.


```
import React, { useEffect, useState } from "react";

const App = ()=> {
    const [usuario, setUsuario] = useState("");
    const [count, setCount] = useState(0);
    const [usuarios, setUsuarios] = useState(["Bruno", "Bianca", "Bernardo"]);

    const handleAddUser = () => {
        setUsuarios([...usuarios, usuario]);
        setUsuario("");
    }

    useEffect(() => {
        setCount(usuarios.length)
    },[usuarios])

    return (
        <div className="App">
            <h1>Lista de Usuários</h1>
            <h3>Total de Usuários: {count}</h3>
            <div>
                <input 
                    value={usuario}
                    onChange={(event) => setUsuario(event.target.value)}
                />
                <button onClick={handleAddUser}>Adicionar</button>
            </div>
            {usuarios.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    );
};

export default App;
```

<br>

## 💻 **Links Úteis**
- https://pt-br.reactjs.org/docs/introducing-jsx.html