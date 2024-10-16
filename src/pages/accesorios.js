import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Accesorios.module.css"; // Asegúrate de crear este archivo CSS

const Accesorios = () => {
  const router = useRouter();
  const { id } = router.query;
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    name: "",
    animalType: "",
    sortBy: "",
    sortOrder: "asc",
  });

  useEffect(() => {
    fetchAccesorios();
  }, [filters]);

  useEffect(() => {
    if (id) {
      // Buscar el producto por ID y mostrar el modal
      const productoSeleccionado = productos.find(
        (producto) => producto._id === id
      );
      if (productoSeleccionado) {
        handleProductClick(productoSeleccionado);
      }
    }
  }, [id, productos]);

  const fetchAccesorios = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products", {
        params: {
          category: "Accesorio",
          name: filters.name || null,
          animalType: filters.animalType || null,
          sortBy: filters.sortBy || null,
          sortOrder: filters.sortOrder,
        },
      });
      setProductos(response.data);
    } catch (error) {
      console.error("Error al cargar los productos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const resetFilters = () => {
    setFilters({
      name: "",
      animalType: "",
      sortBy: "",
      sortOrder: "asc",
    });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(value);
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <Header />
      <div className="text-center my-8">
        <h3 className={`${styles.AccesoriosTitle} text-xl font-bold mb-4`}>
          ACCESORIOS
        </h3>
      </div>

      <div className="flex p-4">
        <div
          className="w-1/4 bg-gray-100 p-4 rounded-lg mr-4 h-fit"
          style={{ backgroundColor: "#8B4513" }}
        >
          <h3
            className={`${styles.FiltrarTitle} text-center text-xl font-bold mb-4`}
          >
            Filtrar
          </h3>
          <input
            type="text"
            name="name"
            placeholder="Buscar por nombre"
            value={filters.name}
            onChange={handleFilterChange}
            className="text-black border rounded-lg p-2 mb-8 w-full"
          />
          <select
            name="animalType"
            value={filters.animalType}
            onChange={handleFilterChange}
            className="border rounded-lg p-2 mb-8 w-full"
          >
            <option value="">Todos los animales</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Otros">Otros</option>
          </select>
          <select
            name="sortBy"
            value={filters.sortBy}
            onChange={handleFilterChange}
            className="border rounded-lg p-2 mb-8 w-full"
          >
            <option value="">Ordenar por</option>
            <option value="name">Nombre</option>
            <option value="price">Precio</option>
          </select>
          <select
            name="sortOrder"
            value={filters.sortOrder}
            onChange={handleFilterChange}
            className="border rounded-lg p-2 mb-8 w-full"
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>
          <button
            onClick={resetFilters}
            className="text-black p-2 bg-gray-300 mb-3 rounded-lg w-full hover:bg-gray-200"
          >
            RESET
          </button>
        </div>

        <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productos.map((producto) => (
            <div
              key={producto._id}
              className="bg-white p-4 rounded-lg shadow-md max-w-xs cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
              onClick={() => handleProductClick(producto)}
            >
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={producto.imageUrl}
                  alt={producto.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded"
                />
              </div>
              <p className="text-xl">Accesorio {producto.animalType}</p>
              <h3 className="font-semibold">{producto.name}</h3>
              <p className="text-xl">{formatCurrency(producto.price)}</p>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg max-w-lg w-full flex flex-col items-center text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bold mb-4">{selectedProduct.name}</h3>
            <Image
              src={selectedProduct.imageUrl}
              alt={selectedProduct.name}
              width={300}
              height={300}
              className="rounded mb-4"
            />
            <p className="mb-2 text-xl">
              Accesorio para {selectedProduct.animalType}
            </p>
            <p className="mb-2 text-xl">{selectedProduct.description}</p>
            <p className="mb-4 text-xl">
              Precio: {formatCurrency(selectedProduct.price)}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Accesorios;
