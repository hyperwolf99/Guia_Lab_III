import { useState } from 'react'

function Ej4() {
    const [altura, setAltura] = useState(0)
    const [base, setBase] = useState(0)

    
    const perimetro = () => {
        let perim=(2 * base+altura * 2)
        alert('El perimetro es '+perim)
    }

    const superficie = () => {
        let superf = altura * base
        alert('La superficie es '+superf)
    }

    return (
        <>
            <h4 style={{ color: 'blue' }}>Ejercicio 4</h4>
            <label htmlFor='altura'>Altura:</label>
            <input value={altura} onChange={(e)=>setAltura(e.target.value)} placeholder='Introduzca la altura'></input><br></br>
            <label htmlFor='base'>Base:</label>
            <input value={base} onChange={(e)=>setBase(e.target.value)} placeholder='Introduzca la base'></input><br></br>
            <button onClick={perimetro}>Calcular perimetro</button>
            <button onClick={superficie}>Calcular superficie</button><br /><br /><br />
        </>
    )
}

export default Ej4