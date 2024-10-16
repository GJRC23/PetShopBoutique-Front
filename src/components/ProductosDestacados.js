import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css"; // Importamos los estilos del carrusel
import styles from "../styles/ProductosDestacados.module.css"; // Asegúrate de tener el archivo CSS

function ProductosDestacados() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/products?isFeatured=true"
        );
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, []);

  const handleProductClick = (product) => {
    // Redireccionar a la página correspondiente basada en la categoría del producto
    let route = "";
    switch (product.category) {
      case "Alimento":
        route = "/alimentos";
        break;
      case "Accesorio":
        route = "/accesorios";
        break;
      case "Indumentaria":
        route = "/indumentaria";
        break;
      case "Juguete":
        route = "/juguetes";
        break;
      case "Aseo":
        route = "/aseo";
        break;
      default:
        route = "/";
    }
    router.push(`${route}?id=${product._id}`);
  };

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (productos.length === 0) {
    return <p>No hay productos destacados en este momento.</p>;
  }

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(value);
  };

  return (
    <div className={styles.productosContainer}>
      <h2 className="">PRODUCTOS DESTACADOS</h2>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={105}
        totalSlides={productos.length}
        visibleSlides={4}
        infinite={true}
        className={styles.carousel}
      >
        <div className={styles.carouselWrapper}>
          <ButtonBack className={styles.carouselButtonBack}>←</ButtonBack>
          <Slider className={styles.slider}>
            {productos.map((producto, index) => (
              <Slide index={index} key={producto._id} className="p-6">
                <div onClick={() => handleProductClick(producto)} className="bg-white p-4 rounded-lg shadow-md max-w-xs cursor-pointer transition-shadow duration-300 hover:shadow-2xl">
                  <div className="relative w-full h-64 mb-4">
                    <Image
                      src={producto.imageUrl}
                      alt={producto.name}
                      layout="fill"
                      objectFit="contain"
                      className="rounded"
                    />
                  </div>
                  <h3 className="font-semibold text-3xl">{producto.name}</h3>
                  <p className="text-xl">{formatCurrency(producto.price)}</p>
                </div>
              </Slide>
            ))}
          </Slider>
          <ButtonNext className={styles.carouselButtonNext}>→</ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}

export default ProductosDestacados;
