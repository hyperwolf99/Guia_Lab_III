import { useState } from 'react'

function TpEj4() {

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [edad, setEdad] = useState('')
    const [altura, setAltura] = useState('')
    const [email, setEmail] = useState('')
    const [validacion, setValidacion] = useState('')
    const [colorTexto, setColorTexto] = useState('red')

    const validarDatos = (e) => {
        if (nombre == '') {
            setValidacion("El nombre esta vacio");
            setColorTexto('red')
        } else if (apellido == '') {
            setValidacion("El apellido esta vacio");
            setColorTexto('red')
        } else if (edad == '') {
            setValidacion("La edad esta vacia");
            setColorTexto('red')
        } else if (altura === 18) {
            setValidacion("La altura esta vacia")
            setColorTexto('red')
        } else if (email == "") {
            setValidacion("El correo esta vacio")
            setColorTexto('red')
        } else if (edad < 18) {
            setValidacion("Menor de edad")
            setColorTexto('red')
        } else if (altura > 230) {
            setValidacion("No puede ser mayor a 230cm")
            setColorTexto('red')
        } else if (!email.includes("@")) {
            setValidacion("Le falta el @ al correo electronico")
            setColorTexto('red')
        } else { setValidacion("Todos los datos son validos"), setColorTexto("green") }
        e.preventDefault()
    }


    return (
        <>
        <h4 style={{color:'darkblue'}}>Ejercicio 4 - TP</h4>
            <form onSubmit={validarDatos}>
                <label htmlFor='nombre'>Nombre</label>
                <input type="text" id='nombre' maxLength="50" value={nombre} onChange={(e) => setNombre(e.target.value)}></input><br />
                <label htmlFor='apellido'>Apellido</label>
                <input type="text" id='apellido' maxLength="50" value={apellido} onChange={(e) => setApellido(e.target.value)}></input><br />
                <label htmlFor='edad'>Edad en años</label>
                <input type="text" id='edad' value={edad} onChange={(e) => setEdad(e.target.value)}></input><br />
                <label htmlFor='altura'>Altura en cm</label>
                <input type="text" id='altura' value={altura} onChange={(e) => setAltura(e.target.value)}></input><br />
                <label htmlFor='email'>Email</label>
                <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}></input><br />
                <button type="submit">Enviar</button>
                <p style={{ color: colorTexto }}>{validacion}</p>
            </form>
        </>
    )
}

export default TpEj4
