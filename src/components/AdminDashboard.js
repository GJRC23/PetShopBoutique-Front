import { useState, useEffect } from "react";
import axios from "axios";

export default function AdminDashboard() {
  const [productos, setProductos] = useState([]);
  const [selectedProducto, setSelectedProducto] = useState(null);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    imagen: "",
    mascota: "",
    tipo: "",
    destacado: false,
  });

  useEffect(() => {
    // Obtener productos desde la API
    axios.get("/api/productos").then((res) => setProductos(res.data));
  }, []);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
  
    // Usamos FormData para enviar el archivo al backend
    const formData = new FormData();
    formData.append('image', file);
  
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });
  
      const data = await response.json();
  
      if (data.imageUrl) {
        if (selectedProducto) {
          setSelectedProducto({
            ...selectedProducto,
            imagen: data.imageUrl,
          });
        } else {
          setNuevoProducto({
            ...nuevoProducto,
            imagen: data.imageUrl,
          });
        }
      }
    } catch (error) {
      console.error('Error subiendo la imagen:', error);
    }
  };
  

  const handleEdit = (producto) => {
    setSelectedProducto(producto);
  };

  const handleDelete = (id) => {
    axios.delete("/api/productos", { data: { id } }).then(() => {
      setProductos((prev) => prev.filter((p) => p._id !== id));
    });
  };

  const handleSave = () => {
    if (selectedProducto) {
      // Guardar edición
      axios.put("/api/productos", selectedProducto).then(() => {
        setProductos((prev) =>
          prev.map((p) =>
            p._id === selectedProducto._id ? selectedProducto : p
          )
        );
        setSelectedProducto(null);
      });
    } else {
      // Crear nuevo producto
      axios.post("/api/productos", nuevoProducto).then((res) => {
        setProductos([...productos, res.data.producto]);
        setNuevoProducto({
          nombre: "",
          imagen: "",
          mascota: "", // Reseteamos mascota aquí también
          tipo: "",
          destacado: false,
        });
      });
    }
  };
  

  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-black">
        Administración de Productos
      </h1>
      <ul className="mt-6 space-y-4">
        {productos.map((producto) => (
          <li
            key={producto._id}
            className="flex justify-between items-center bg-white p-4 rounded shadow"
          >
            <span>
              {producto.nombre} - {producto.tipo}
            </span>
            <div className="space-x-4">
              <button
                onClick={() => handleEdit(producto)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(producto._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Formulario para crear o editar producto */}
      <div className="mt-10 bg-white p-6 rounded shadow">
        <h2 className="text-2xl text-black font-semibold mb-4">
          {selectedProducto ? "Editar Producto" : "Crear Producto"}
        </h2>
        <input
          type="text"
          placeholder="Nombre"
          value={
            selectedProducto ? selectedProducto.nombre : nuevoProducto.nombre
          }
          onChange={(e) =>
            selectedProducto
              ? setSelectedProducto({
                  ...selectedProducto,
                  nombre: e.target.value,
                })
              : setNuevoProducto({ ...nuevoProducto, nombre: e.target.value })
          }
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />

        {/* Campo de carga de imagen */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        />
        <select
          value={selectedProducto ? selectedProducto.mascota : nuevoProducto.mascota}
          onChange={(e) =>
            selectedProducto
              ? setSelectedProducto({
                  ...selectedProducto,
                  mascota: e.target.value,
                })
              : setNuevoProducto({ ...nuevoProducto, mascota: e.target.value })
          }
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        >
          <option value="perro">Perro</option>
          <option value="gato">Gato</option>
        </select>
        <select
          value={selectedProducto ? selectedProducto.tipo : nuevoProducto.tipo}
          onChange={(e) =>
            selectedProducto
              ? setSelectedProducto({
                  ...selectedProducto,
                  tipo: e.target.value,
                })
              : setNuevoProducto({ ...nuevoProducto, tipo: e.target.value })
          }
          className="w-full mb-4 p-2 border text-black border-gray-300 rounded"
        >
          <option value="alimento">Alimento</option>
          <option value="juguete">Juguete</option>
          <option value="accesorio">Accesorio</option>
          <option value="indumentaria">Indumentaria</option>
        </select>
        <label className="flex items-center text-black space-x-2 mb-4">
          <input
            type="checkbox"
            checked={
              selectedProducto
                ? selectedProducto.destacado
                : nuevoProducto.destacado
            }
            onChange={(e) =>
              selectedProducto
                ? setSelectedProducto({
                    ...selectedProducto,
                    destacado: e.target.checked,
                  })
                : setNuevoProducto({
                    ...nuevoProducto,
                    destacado: e.target.checked,
                  })
            }
            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
          />
          <span>Destacado</span>
        </label>
        <button
          onClick={handleSave}
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          {selectedProducto ? "Guardar Cambios" : "Crear Producto"}
        </button>
      </div>
    </div>
  );
}
