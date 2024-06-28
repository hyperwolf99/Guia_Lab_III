import { useState } from 'react'

function TpEj2() {
    const [peso, setPeso] = useState("")
    const [altura, setAltura] = useState("")
    const [color1, setColor1] = useState("black")
    const [imc, setImc] = useState("")
    const [nivelimc, setNivelimc] = useState("")

    const IMC = () => {
        const resultado = peso / (altura * altura)
        setImc(resultado.toFixed(2))
        if (resultado < 18.5) {
            setNivelimc("Bajo")
            setColor1("yellow")

        } else if (resultado >= 18.5 && resultado <= 24.9) {
            setNivelimc("Normal")
            setColor1("green")

        } else if (resultado >= 25 && resultado <= 29.9) {
            setNivelimc("Sobrepeso")
            setColor1("orange")

        } else if (resultado >= 30) {
            setNivelimc("Obesidad")
            setColor1("red")
        }
    }

    return (
        <>
        <h4 style={{color:'darkblue'}}>Ejercicio 2 - TP</h4>
            <div>
                <h1>IMC</h1>
                <label htmlFor='peso'>Peso KG</label>
                <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} id="peso"></input><br></br>
                <label htmlFor="altura">Altura Mts</label>
                <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} id="altura"></input><br></br>
                <button onClick={IMC}>Calcular</button>
                <p style={{ color: color1 }}>El IMC es de: {imc} y el nivel es {nivelimc}</p>
            </div>
        </>
    )
}

export default TpEj2
