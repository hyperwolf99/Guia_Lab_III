import { useState, useEffect } from 'react'

function App() {
  const [nombre, setNombre] = useState("")
  const [edad, setEdad] = useState(0)
  const [listaPersonas, setListaPersonas] = useState([])
  const [promedio, setPromedio] = useState(0)
  const [mayor, setMayor] = useState(false)

  const agregarPersona = () => {
    setListaPersonas(
      [...listaPersonas, { "nombre": nombre, "edad": edad }]
    )
    setNombre("")
    setEdad(0)
  }
  useEffect(() => {
    let suma = 0
    listaPersonas.forEach((persona) => {
      if (persona.edad > 17) {
        setMayor(true)
      }
      suma += persona.edad
    })
    suma = suma / listaPersonas.length
    setPromedio(suma)
  }, [listaPersonas])
  return (
    <>

      <form >
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />

        <label htmlFor="edad">Edad</label>
        <input type="numbre" name="edad" value={edad} onChange={(e) => setEdad(Number(e.target.value))} />

        <button type='button' onClick={agregarPersona}> Agregar</button>

      </form>

      <ul>
        {listaPersonas.map((persona, index) => (
          <li key={index} > {persona.nombre},{persona.edad}</li>
        ))}
      </ul>


      {mayor ? <span>"Existe alguien mayor de edad"</span> : <span>"No hay alguien con mayoria de edad"</span>}
      <br />
      <span>el promedio de edad de las personas de la lista es {promedio}</span>
    </>
  )
}

export default App
