# 📌 **Trabalhando Com Hooks Básicos**
## 🎯 **Objetivo**
Entender o que são hooks e como utilizalos na nossa aplicação

<br>

## 🌐 **Pré-requisitos**
Editor de código (Visual Studio Code)

<br>

## 🏁 **Percurso**
### Etapa 1: O que são hooks
### Etapa 2: useState
### Etapa 3: useEffect
### Etapa 4: useMemo
### Etapa 5: useCallback

<br>

## ✅ **Etapa 1: O que são hooks**
Até a versão 16.7 do React algumas funcionalidades só eram possíveis de ser acessadas através de classes (como, por exemplo, o lifecycle). Apesar da possibilidade de criar componentes a partir de função, até essa versão, eles só recebiam propriedades, não podendo acessar todas as funcionalidades do React, como as classes.

Na versão 16.8 do React, foram lançado os hooks, que permitem o uso de vários recursos de forma simples através de funções. Eles também ajudam a organizar a lógica utilizada dentro dos componentes.

<br>

## ✅ **Etapa 2: useState**
O que o useState faz? Ele declara um variável state. Nossa variável é chamada de count mas poderíamos chamar de qualquer coisa, como banana. Esta é uma maneira de “preservar” alguns valores entre as chamadas de funções — useState é uma nova maneira de usar as mesmas capacidades que o this.state tem em uma classe. Normalmente, variáveis “desaparecem” quando a função sai mas variáveis de state são preservadas pelo React.

Exemplo utilizando o useState:
```
import { useState } from 'react';

const Teste = () => {

const [ name, setName ] = useState('Bruno');
const handleChangeName = () => {
    setName(prev => prev === 'Bruno' ? 'Oliveira' : 'Bruno');
};

    return (
        <div>
            <p>{name}</p>
            <button onClick={handleChangeName}>Alterar Nome</button>
        </div>
    );
};

export { Teste };
```

<br>

## ✅ **Etapa 3: useEffect**
O que o useEffect faz? Usando esse Hook, você diz ao React que o componente precisa fazer algo apenas depois da renderização. O React ira se lembrar da função que você passou (nos referiremos a ele como nosso “efeito”), e chamá-la depois que realizar as atualizações do DOM. Nesse efeito, mudamos o título do documento, mas podemos também realizar busca de dados ou chamar alguma API imperativa.

Exemplo utilizando o useEffect:
```
import { useState, useEffect } from 'react';

const Teste = () => {

    const [ name, setName ] = useState('Bruno');
    const handleChangeName = () => {
        setName(prev => prev === 'Bruno' ? 'Oliveira' : 'Bruno');
    };

    useEffect(() =>{
        alert('renderizei')
    }, [ name ]);

    return (
        <div>
            <p>{name}</p>
            <button onClick={handleChangeName}>Alterar Nome</button>
        </div>
    );
};

export { Teste };
```

<br>

## ✅ **Etapa 4: useMemo**
```useMemo``` é um React Hook que permite armazenar em cache o resultado de um cálculo entre re-renderizações.
Sintaxe:
```
const cachedValue = useMemo(calculateValue, dependencies)
```

Exemplo utilizando o useMemo:
```
import { useState, useMemo } from 'react';

const Teste02 = () => {
    const [ age, setAge ] = useState(30);

    const handleChangeAge = () => {
        setAge(prev => prev === 30 ? 32 : 30)
    };

    const calculo = useMemo(()=> {
        console.log('Calculou', age)
        return 10 * age;
    }, [ age ]);

    console.log('renderizou', calculo)

  return (
    <div>
    <p>{age}</p>
    <button onClick={handleChangeAge}>Alterar</button>
</div>
  )
}

export { Teste02 }
```

<br>

## ✅ **Etapa 5: useCallback**
```useCallback``` é um React Hook que permite armazenar em cache uma definição de função entre re-renderizações.

Sintaxe:
```
const cachedFn = useCallback(fn, dependencies)
```


<br>

## 💻 **Links Úteis**

- https://pt-br.reactjs.org/docs/hooks-intro.html