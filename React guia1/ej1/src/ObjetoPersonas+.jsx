import { useState } from 'react'

function Ej10() {
    const [personas, setPersonas] = useState([{'nombre':'Joel','apellido':'Moyano','edad':'25'},
    {'nombre':'Juan','apellido':'Perez','edad':'20'},{'nombre':'Pablo','apellido':'Oliva','edad':'23'}])
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [edad, setEdad] = useState('')

    const agregar = () => {
        if (nombre.trim() === "") {
            alert("No se puede ingresar nombre vacio");
        } else if (apellido.trim() === ''){
            alert('No se puede ingresar apellido vacio')
        } else if (edad.trim() === ''){
            alert('No se puede ingresar edad vacia')
        } else {
            const nuevaPersona = { nombre, apellido, edad }
            setPersonas([...personas, nuevaPersona]);
            setNombre("")
            setApellido("")
            setEdad("")
        }
    };

    const quitar = (index) => {
        if (confirm(`Desea quitar ${personas[index]}?`)) {
            setPersonas(personas.filter((_, i) => i !== index))
        }
    }

    return (
        <>
            <h4 style={{ color: 'blue' }}>Ejercicio 10</h4>
            <label htmlFor='nombre'>Nombre: </label>
            <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}></input><br></br>
            <label htmlFor='apellido'>Apellido: </label>
            <input type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}></input><br></br>
            <label htmlFor='edad'>Edad: </label>
            <input type="number" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)}></input>
            <button type="submit" onClick={agregar}>Agregar</button>
            <ul>{personas.map((persona,index)=> {
                return <li key={index}><b>Nombre:</b> {persona.nombre} - <b>Apellido:</b> {persona.apellido} - <b>Edad:</b> {persona.edad}<button onClick={() => quitar(index)}>X</button></li>})}
            </ul>
        </>
    )
}

export default Ej10