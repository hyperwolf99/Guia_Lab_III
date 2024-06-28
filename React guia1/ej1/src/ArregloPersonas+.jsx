import { useState } from 'react'

function Ej8() {
    const [personas, setPersonas] = useState(['Joel', 'Ramon', 'Lucas', 'Mario', 'Bros'])
    const [nombre, setNombre] = useState('')

    const agregar = () => {
        if (nombre.trim() === "") {
            alert("No se puede ingresar nombre vacio");
        } else {
            setPersonas([...personas, nombre]);
            setNombre("");
        }
    };

    const quitar = (index) => {
        if (confirm(`Desea quitar ${personas[index]}?`)) {
            setPersonas(personas.filter((_, i) => i !== index))
        }
    }

    // const handleQuitarPorPersona = (persona) => {
    //     if (confirm(`¿Desea quitar ${persona}?`)) {
    //         setPersonas(personas.filter((p) => p !== persona));
    //     }
    // };

    return (
        <form id="formulario" onSubmit={(e) => (e.preventDefault())}>
            <h4 style={{ color: 'blue' }}>Ejercicio 8</h4>
            <label htmlFor='nombre'>Nombre: </label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
            <button type="submit" onClick={agregar}>Agregar</button>
            <ol>
                {personas.map((persona, index) => (
                    <li key={index}>
                        {persona}
                        <button onClick={() => quitar(index)}>X</button>
                    </li>
                ))}
            </ol>
        </form>
    )
}

export default Ej8