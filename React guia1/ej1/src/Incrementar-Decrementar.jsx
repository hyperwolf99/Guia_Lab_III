import { useState } from 'react'

function Ej1() {
  const [contador, setContador]= useState(0)

  const incrementar = ()=>{
    setContador(contador+1)
  }

  const decrementar = ()=>{
    setContador(contador-1)
  }

  return (
    <>
      <h4 style={{color:'blue'}}>Ejercicio 1</h4>
      <h1>{contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button><br/><br/><br/>
    </>
  )
}

export default Ej1