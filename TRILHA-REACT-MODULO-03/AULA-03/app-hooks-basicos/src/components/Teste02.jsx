import { useState, useMemo, useCallback } from 'react';

const Teste02 = () => {
    const [ age, setAge ] = useState(30);
    const [ name, setName ] = useState('Bruno');

    // useMemo = referencia em variaveis(const, let e var).
    // useCallback = referncia de função.

    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age;
        console.log('age atual', age, newAge)
        setAge(prev => prev === 30 ? 32 : 30)
    }, [age]);

    const handleChangeName = useCallback(() => {
        setName(prev => prev === 'Bruno' ? 'Oliveira' : 'Bruno');
    }, []);

    const calculo = useMemo(()=> {
        console.log('Calculou', age)
        return 10 * age;
    }, [ age ]);

        console.log('renderizou', calculo)

    return (
        <div>
            <p>{age}</p>
            <p>{name}</p>
            <button onClick={handleChangeAge}>Alterar Idade</button>
            <button onClick={handleChangeName}>Alterar Nome</button>
        </div>
    )
}

export { Teste02 }