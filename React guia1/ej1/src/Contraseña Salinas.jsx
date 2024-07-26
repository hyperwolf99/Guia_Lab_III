import { useState, useEffect } from 'react'

function App2() {

  const [pass1, setPass1] = useState("")
  const [pass2, setPass2] = useState("")
  const [deshabilitado, setDeshabilitado] = useState(true)

  const tieneNumeros = () => {
    return (pass1.includes("0") || pass1.includes("1") || pass1.includes("2") || pass1.includes("3") || pass1.includes("4") || pass1.includes("5") || pass1.includes("6") || pass1.includes("7") || pass1.includes("8") || pass1.includes("9"))

  }
  const esLarga = () => {
    return (pass1.length > 7)
  }

  const tieneSignos = () => {
    return (pass1.includes("@") || pass1.includes("!") || pass1.includes("$") || pass1.includes("%") || pass1.includes("&") || pass1.includes("#"))
  }
  const noTieneEspacios = () => {
    return (!pass1.includes(" "))
  }

  const coinciden = () => {
    return (pass1 == pass2)
  }

  const validar = () => {
    if (coinciden() && noTieneEspacios() && tieneSignos() && esLarga() && tieneNumeros()) {
      setDeshabilitado(false)
      alert("La contraseña es valida.")
    } else {
      setDeshabilitado(true)
    }
  }
  useEffect(() => validar(), [pass1, pass2])
  return (
    <>
      <div className="contenedor">
        <form>
          <div className='password1'>
            <label htmlFor="passwor1">Ingrese una contraseña:</label>
            <input type="password" name='password1' onChange={(e) => setPass1(e.target.value)} />
          </div>
          <div className='password2'>
            <label htmlFor="passwor2">Ingrese nuevamente la contraseña :</label>
            <input type="password" name='password1' onChange={(e) => setPass2(e.target.value)} />
          </div>
          <p style={{ "color": esLarga() ? "green" : "red" }}> La contraseña debe tener al menos 8 caracteres</p>
          <p style={{ "color": tieneNumeros() ? "green" : "red" }}> La contraseña debe incluir al menos un numero</p>
          <p style={{ "color": tieneSignos() ? "green" : "red" }}> La contraseña debe tener al menos un SIGNO(@,!,$,%,&,#)</p>
          <p style={{ "color": noTieneEspacios() ? "green" : "red" }}> La contraseña no debe contener espacios</p>
          <p style={{ "color": coinciden() ? "green" : "red" }}> Las contraseñas deben coincir</p>
          <button disabled={deshabilitado}>Registrar</button>
        </form>
      </div>
    </>
  )
}

export default App2
