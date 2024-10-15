import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Alimentos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlimentos = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products", {
          params: { category: "Alimento" },
        });
        setProductos(response.data);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlimentos();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  return (
    <div>
      <Header />
      <div className="p-4">
        <h2 className="text-black text-2xl font-bold mb-4">
          Productos de Alimentos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productos.map((producto) => (
            <div
              key={producto._id}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={producto.imageUrl}
                  alt={producto.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <h3 className="text-black text-lg font-semibold">
                {producto.name}
              </h3>
              <p className="text-black font-bold">Precio: ${producto.price}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Alimentos;
