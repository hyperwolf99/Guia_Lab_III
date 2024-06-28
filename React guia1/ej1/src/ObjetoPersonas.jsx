import { useState } from 'react'

function Ej9() {
    const [personas] = useState([{'nombre':'Joel','apellido':'Moyano','edad':'25'},
    {'nombre':'Juan','apellido':'Perez','edad':'20'},{'nombre':'Pablo','apellido':'Oliva','edad':'23'}])

    return (
        <>
            <h4 style={{ color: 'blue' }}>Ejercicio 9</h4>
            <ul>{personas.map((persona,index)=> {
                return <li key={index}><b>Nombre:</b> {persona.nombre} - <b>Apellido:</b> {persona.apellido} - <b>Edad:</b> {persona.edad}</li>})}
            </ul>
        </>
    )
}

export default Ej9