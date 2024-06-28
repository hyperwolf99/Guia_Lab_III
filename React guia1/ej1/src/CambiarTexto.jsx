import { useState } from 'react'

function Ej2() {
    const [input, setInput]= useState('')
    const [texto, setTexto]=useState('')

    const cambiarTexto = ()=>{
    setTexto(input)
    }

    return (
    <>
        <h4 style={{color:'blue'}}>Ejercicio 2</h4>
        <p>{texto}</p>
        <input value={input} onChange={(e)=>setInput(e.target.value)}></input>
        <button onClick={cambiarTexto}>Incrementar</button><br/><br/><br/>
    </>
    )
}

export default Ej2