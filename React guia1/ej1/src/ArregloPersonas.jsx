import { useState } from 'react'

function Ej7() {
    const [personas] = useState(['Joel','Ramon','Lucas','Mario','Bros'])

    return (
        <>
            <h4 style={{ color: 'blue' }}>Ejercicio 7</h4>
            <ul>{personas.map((persona,index)=> {
                return <li key={index}>{persona}</li>})}
            </ul>
        </>
    )
}

export default Ej7