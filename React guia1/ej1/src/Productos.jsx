
import { useState, useEffect } from 'react';

function Productos() {
    const [productos, setProductos] = useState([]);

    const [nuevoProducto, setNuevoProducto] = useState({ id: 1, nombre: '', precio: '' });
    const [editandoProducto, setEditandoProducto] = useState(null);
    const [mostrarError, setMostrarError] = useState(false);

    useEffect(() => {
        if (productos.length === 0) {
            setNuevoProducto({ ...nuevoProducto, id: 1 });
        } else {
            const ultimoId = productos[productos.length - 1].id;
            setNuevoProducto({ ...nuevoProducto, id: ultimoId + 1 });
        }
    }, [productos, nuevoProducto]);

    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setNuevoProducto({ ...nuevoProducto, [name]: value });

        if (name === 'nombre') {
            const productoExistente = productos.find(p => p.nombre.toLowerCase() === value.toLowerCase() && p.id !== editandoProducto?.id);
            setMostrarError(productoExistente ? true : false);
        }
    };

    const agregarProducto = () => {
        if (!nuevoProducto.nombre || !nuevoProducto.precio) return;

        if (mostrarError) return;

        setProductos([...productos, nuevoProducto]);
        setNuevoProducto({ id: nuevoProducto.id + 1, nombre: '', precio: '' });
        setMostrarError(false);
    };

    const editarProducto = (producto) => {
        setEditandoProducto(producto);
        setNuevoProducto({ ...producto });
    };

    const guardarCambios = () => {
        if (!nuevoProducto.nombre || !nuevoProducto.precio) return;

        if (mostrarError) return;

        setProductos(productos.map(p => (p.id === editandoProducto.id ? nuevoProducto : p)));
        setNuevoProducto({ id: nuevoProducto.id + 1, nombre: '', precio: '' });
        setEditandoProducto(null);
        setMostrarError(false);
    };

    const eliminarProducto = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
            setProductos(productos.filter(p => p.id !== id));
        }
    };

    const cancelarAccion = () => {
        setNuevoProducto({ id: nuevoProducto.id, nombre: '', precio: '' });
        setEditandoProducto(null);
        setMostrarError(false);
    };

    const calcularPromedio = () => {
        if (productos.length === 0) return 0;
        const total = productos.reduce((acc, curr) => acc + parseFloat(curr.precio), 0);
        return (total / productos.length).toFixed(2);
    };

    return (
        <div>
            <h4 style={{color:'darkblue'}}>Productos</h4>
            <h1>Lista de Productos</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.precio}</td>
                            <td>
                                <button onClick={() => editarProducto(producto)}>Editar</button>
                                <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>{editandoProducto ? 'Editar Producto' : 'Agregar Producto'}</h2>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={nuevoProducto.nombre} onChange={manejarCambio} />{mostrarError && <p style={{ color: 'red' }}>Este producto ya existe</p>}
            </div>
            <div>
                <label htmlFor="precio">Precio:</label>
                <input type="number" id="precio" name="precio" value={nuevoProducto.precio} onChange={manejarCambio} />
            </div>
            <button onClick={editandoProducto ? guardarCambios : agregarProducto} disabled={mostrarError || !nuevoProducto.nombre || !nuevoProducto.precio}>{editandoProducto ? 'Guardar Cambios' : 'Agregar'}</button>
            <button onClick={cancelarAccion}>Cancelar</button>
            <h2>Promedio de Precios: {calcularPromedio()}</h2>
        </div>
    );
}
export default Productos;
