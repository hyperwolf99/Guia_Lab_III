import { useState } from 'react'
import "./styles.css"

function TpEj3() {
    const [direccion, setDireccion] = useState('row')
    const [justificado, setJustificado] = useState('flex-start')
    const [alineado, setAlineado] = useState('stretch')

    return (
        <>
        <h4 style={{color:'darkblue'}}>Ejercicio 3 - TP</h4>
            <label htmlFor="direccion">Dirección:</label>
            <select id="direccion" onChange={(e) => setDireccion(e.target.value)}>
                <option value="row">Filas</option>
                <option value="row-reverse">Filas opuestas</option>
                <option value="column">Columnas</option>
                <option value="column-reverse">Columnas opuestas</option>
            </select><br></br>

            <label htmlFor="justificado">Justificado:</label>
            <select id="justificado" onChange={(e) => setJustificado(e.target.value)}>
                <option value="flex-start">Inicio</option>
                <option value="center">Centro</option>
                <option value="flex-end">Final</option>
                <option value="space-between">Espaciado</option>
                <option value="space-around">Espaciado alrededor</option>
                <option value="space-evenly">Espaciado equilibrado</option>
            </select><br></br>

            <label htmlFor="alineado">Alineado:</label>
            <select id="alineado" onChange={(e) => setAlineado(e.target.value)}>
                <option value="stretch">Estirado</option>
                <option value="center">Centro</option>
                <option value="flex-start">Arriba</option>
                <option value="flex-end">Abajo</option>
            </select><br></br>

            <div id="contenedor" style={{ flexDirection: direccion, justifyContent: justificado, alignItems: alineado }}>
                <div className="caja1">1</div>
                <div className="caja2">2</div>
                <div className="caja3">3</div>
            </div>
        </>
    )
}

export default TpEj3