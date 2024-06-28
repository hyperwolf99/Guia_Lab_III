import { useState } from 'react'

function Ej3() {
    const [numero, setNumero]= useState(0)
    const [mensaje, setMensaje]= useState([])

    const handleCambiar=(e)=>{
        const nuevoNumero = e.target.value
        setNumero(nuevoNumero)

        const nuevoMensaje = []
        const numero1 = parseInt(nuevoNumero)

        if(!isNaN(numero1)){
            if (numero1 > 0){
                nuevoMensaje.push('El numero es positivo')
            }else if (numero1 < 0){
                nuevoMensaje.push('El numero es negativo')
            }else{
                nuevoMensaje.push('El numero es cero')
            }

            if(numero1 % 2 === 0){
                nuevoMensaje.push('El numero es par')
            } else {
                nuevoMensaje.push('El numero es impar')
            }

            if(numero1 % 7 === 0){
                nuevoMensaje.push('El numero es multiplo de 7')
            }else{
                nuevoMensaje.push('El numero no es multiplo de 7')
            }

            if(esCapicua(numero1)){
                nuevoMensaje.push('El numero es capicua')
            }else{
                nuevoMensaje.push('El numero no es capicua')
            }
        }
        setMensaje(nuevoMensaje)
    }

    const esCapicua = (numero1)=>{
        const numString = numero1.toString()
        const numReverso = numString.split('').reverse().join('')
        return numString === numReverso
    }

    return (
    <>
        <h4 style={{color:'blue'}}>Ejercicio 3</h4>
        <input value={numero} type="number" onChange={handleCambiar}></input>
        {mensaje.map((mensaje,index)=>(
            <p key={index}>{mensaje}</p>
        ))}
        <br></br><br></br><br></br>
    </>
    )
}

export default Ej3