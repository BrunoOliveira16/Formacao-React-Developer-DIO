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