import { useState, useEffect } from 'react';

const Teste = () => {

    const [ name, setName ] = useState('Bruno');
    const handleChangeName = () => {
        setName(prev => prev === 'Bruno' ? 'Oliveira' : 'Bruno');
    };

    useEffect(() =>{
        alert('renderizei');

    }, [ name ]);

    return (
        <div>
            <p>{name}</p>
            <button onClick={handleChangeName}>Alterar Nome</button>
        </div>
    );
};

export { Teste };