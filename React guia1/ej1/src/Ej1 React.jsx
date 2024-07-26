import { useState } from 'react';

function Ej1Parcial() {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [personas, setPersonas] = useState([]);

    const agregarPersona = () => {
        setPersonas([...personas, { nombre, edad }]);
        setNombre('');
        setEdad('');
    };

    const existeMayorDeEdad = personas.some(persona => persona.edad >= 18);

    const promedioEdad = personas.length > 0 ? personas.reduce((suma, persona) => suma + parseInt(persona.edad), 0) / personas.length: 0;

    return (
        <div>
            <h4 style={{ color: 'blue' }}>Ejercicio de parcial 1</h4>
            <form onSubmit={(e) => { e.preventDefault(); agregarPersona(); }}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="edad">Edad:</label>
                    <input type="number" id="edad" value={edad} onChange={(e) => setEdad(e.target.value)} />
                </div>
                <button type="submit">Agregar</button>
            </form>

            <h2>Lista de Personas:</h2>
            <ul>
                {personas.map((persona, index) => (
                    <li key={index}>{persona.nombre} - {persona.edad} años</li>
                ))}
            </ul>

            <span>{existeMayorDeEdad ? 'Existe una persona mayor de edad' : ''}</span>
            <br />
            <span>El promedio de edad de las personas de la lista es: {promedioEdad.toFixed(2)}</span>
        </div>
    );
}

export default Ej1Parcial;