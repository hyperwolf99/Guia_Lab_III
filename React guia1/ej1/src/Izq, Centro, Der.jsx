import { useState } from "react"

function TpEj1() {

    const [izq, setIzq] = useState(false)
    const [centro, setCentro] = useState(true)
    const [derecho, setDerecho] = useState(true)

    const izquierdo = () => {
        setIzq(true)
        setCentro(false)
        setDerecho(true)
    }

    const centroo = () => {
        setCentro(true)
        setIzq(true)
        setDerecho(false)
    }

    const derechoo = () => {
        setDerecho(true)
        setIzq(false)
        setCentro(true)
    }



    return (
        <>
        <h4 style={{color:'darkblue'}}>Ejercicio 1 - TP</h4>
            <div>
                <button onClick={izquierdo} disabled={izq}>Izquierdo</button>
                <button onClick={centroo} disabled={centro}>Centro</button>
                <button onClick={derechoo} disabled={derecho}>Derecho</button>
            </div>
        </>
    )
}

export default TpEj1
