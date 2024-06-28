import { useState } from 'react'

function Ej5() {
    const [colorTexto, setColorTexto] = useState('black')
    const [colorFondo, setColorFondo] = useState('white')



    return (
        <>
            <h4 style={{ color: 'blue' }}>Ejercicio 5</h4>
            <label>Color de fondo:</label>
            <select value={colorFondo} onChange={(e)=>setColorFondo(e.target.value)}>
                <option value='white'>Blanco</option>
                <option value='violet'>Violeta</option>
                <option value='orange'>Naranja</option>
                <option value='yellow'>Amarillo</option>
            </select><br></br>
            <label>Color del texto:</label>
            <select value={colorTexto} onChange={(e)=>setColorTexto(e.target.value)}>
                <option value='black'>Negro</option>
                <option value='red'>Rojo</option>
                <option value='blue'>Azul</option>
                <option value='green'>Verde</option>
            </select><br></br>
            <p style={{color:colorTexto, backgroundColor:colorFondo}}>Texto</p> <br></br>
        </>
    )
}

export default Ej5