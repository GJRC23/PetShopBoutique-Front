import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Indumentaria.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import WhatsAppButton from "../components/WhatsAppButton";

const Indumentaria = () => {
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

  useEffect(() => {
    fetchIndumentaria();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  const fetchIndumentaria = async () => {
    try {
      const response = await axios.get(
        "https://backpetshopboutique.onrender.com/api/products",
        {
          params: {
            category: "Indumentaria",
            name: filters.name || null,
            animalType: filters.animalType || null,
            sortBy: filters.sortBy || null,
            sortOrder: filters.sortOrder,
          },
        }
      );
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

  return (
    <div>
      <Header />
      {/* TITLE ALIMENTOS */}
      <div className="text-center">
        <h3
          className="text-4xl md:text-6xl text-white text-center"
          style={{ color: "#8B4513" }}
        >
          INDUMENTARIA
        </h3>
      </div>

      <div className="flex flex-col md:flex-row p-4">
        {/* Filtros - 1/4 de la página */}
        <div
          className="w-full md:w-1/4 p-4 rounded-lg mr-0 md:mr-4 mb-4 md:mb-0 h-min"
          style={{ backgroundColor: "#8B4513" }}
        >
          <h3 className="text-3xl font-bold text-center text-white my-6">
            Filtrar
          </h3>

          {/* Inputs de filtros */}
          <input
            type="text"
            name="name"
            placeholder="Buscar por nombre"
            value={filters.name}
            onChange={handleFilterChange}
            className="text-black border rounded-lg p-2 mb-4 w-full"
          />

          <select
            name="animalType"
            value={filters.animalType}
            onChange={handleFilterChange}
            className="border rounded-lg p-2 mb-4 w-full"
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
            className="border rounded-lg p-2 mb-4 w-full"
          >
            <option value="">Ordenar por</option>
            <option value="name">Nombre</option>
            <option value="price">Precio</option>
          </select>

          <select
            name="sortOrder"
            value={filters.sortOrder}
            onChange={handleFilterChange}
            className="border rounded-lg p-2 mb-4 w-full"
          >
            <option value="asc">Ascendente</option>
            <option value="desc">Descendente</option>
          </select>

          {/* Botón de reinicio de filtros */}
          <div className="flex justify-center">
            <button
              onClick={resetFilters}
              className="flex justify-center items-center p-3 rounded-full text-white text-2xl transition duration-300 hover:text-gray-400 mb-1"
              style={{ backgroundColor: "transparent" }}
            >
              <FontAwesomeIcon icon={faSyncAlt} />
            </button>
          </div>
        </div>

        {/* Productos - 3/4 de la página */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {productos.map((producto) => (
            <div
              key={producto._id}
              className="bg-white p-4 rounded-lg shadow-md w-full cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
              onClick={() => handleProductClick(producto)}
            >
              <h3 className="font-semibold text-2x1 md:text-2xl text-center">
                {producto.name}
              </h3>
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={producto.imageUrl}
                  alt={producto.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded"
                />
              </div>
              <p className="text-lg md:text-xl">
                Indumentaria {producto.animalType}
              </p>
              <p className="text-lg md:text-xl">
                {formatCurrency(producto.price)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 flex flex-col items-center text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-bold mb-4 text-lg md:text-2xl">
              {selectedProduct.name}
            </h3>
            <div className="w-full h-64 sm:h-80 md:h-96 relative mb-4">
              <Image
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                layout="fill"
                objectFit="contain"
                className="rounded"
              />
            </div>
            <p className="mb-2 text-base md:text-xl">
              Accesorio para {selectedProduct.animalType}
            </p>
            <p className="mb-2 text-base md:text-xl">
              {selectedProduct.description}
            </p>
            <p className="mb-4 text-base md:text-xl">
              Precio: {formatCurrency(selectedProduct.price)}
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300 w-full sm:w-auto"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Indumentaria;
