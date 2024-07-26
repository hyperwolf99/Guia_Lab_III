import { useState } from 'react'

function Ej2Parcial() {
    const [contraseña, setContraseña] = useState('')
    const [confirmarContraseña, setConfirmarContraseña] = useState('')
    const [errores, setErrores] = useState({longitud: false, numero: false, simbolo: false, espacio: false, coinciden: false})

    const manejarCambioContraseña = (e) => {
        setContraseña(e.target.value)
        validarContraseña(e.target.value)
    }

    const manejarCambioConfirmarContraseña = (e) => {
        setConfirmarContraseña(e.target.value)
        validarCoincidencia()
    };

    const validarContraseña = (valor) => {
        const nuevosErrores = { ...errores }
        nuevosErrores.longitud = valor.length >= 8
        nuevosErrores.numero = valor.split('').some(caracter => !isNaN(parseInt(caracter)))
        nuevosErrores.simbolo = ['!', '@', '#', '$', '%', '&'].some(simbolo => valor.includes(simbolo))
        nuevosErrores.espacio = !valor.includes(' ')
        setErrores(nuevosErrores)
    }

    const validarCoincidencia = () => {
        setErrores(erroresPrevios => ({
            ...erroresPrevios,
            coinciden: contraseña !== confirmarContraseña
        }))
    }

    const manejarEnvio = () => {
        let esValida = true
        for (const propiedad in errores) {
            if (!errores[propiedad]) {
                esValida = false
                break
            }
        }
        if (esValida) {
            alert('La contraseña es válida!')
        }
    }

    const estaHabilitadoBoton = () => {
        for (const propiedad in errores) {
            if (!errores[propiedad]) {
                return false
            }
        }
        return true
    };


    return (
        <div>
            <form>
            <h4 style={{ color: 'blue' }}>Ejercicio de parcial 2</h4>
                <div>
                    <label htmlFor="contraseña">Contraseña:</label>
                    <input type="password" id="contraseña" value={contraseña} onChange={manejarCambioContraseña} />
                </div>
                <div>
                    <label htmlFor="confirmarContraseña">Confirmar Contraseña:</label>
                    <input type="password" id="confirmarContraseña" value={confirmarContraseña} onChange={manejarCambioConfirmarContraseña} />
                </div>
                <button type="button" onClick={manejarEnvio} disabled={!estaHabilitadoBoton()}>Validar Contraseña</button>
            </form>
            <p style={{ color: errores.longitud ? 'green' : 'red' }}>Tiene al menos 8 caracteres: {errores.longitud ? 'Sí' : 'No'}</p>
            <p style={{ color: errores.numero ? 'green' : 'red' }}>Incluye al menos un número: {errores.numero ? 'Sí' : 'No'}</p>
            <p style={{ color: errores.simbolo ? 'green' : 'red' }}>Incluye al menos un signo: {errores.simbolo ? 'Sí' : 'No'}</p>
            <p style={{ color: errores.espacio ? 'green' : 'red' }}>No contiene espacios: {errores.espacio ? 'Sí' : 'No'}</p>
            <p style={{ color: errores.coinciden ? 'green' : 'red' }}>Las contraseñas coinciden: {errores.coinciden ? 'Sí' : 'No'}</p>
        </div>
    );
}
export default Ej2Parcial;
