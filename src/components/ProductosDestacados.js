import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import styles from "../styles/ProductosDestacados.module.css";

function ProductosDestacados() {
  const [productos, setProductos] = useState([]);
  const [visibleSlides, setVisibleSlides] = useState(4);
  const [slideHeight, setSlideHeight] = useState(105); 
  const router = useRouter();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(
          "https://admin-petshop-boutique.vercel.app/api/products?isFeatured=true"
        );
        if (!response.ok) {
          throw new Error("Error al cargar los productos");
        }
        const data = await response.json();
        setProductos(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Ajustar el número de diapositivas visibles según el ancho de la pantalla
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setVisibleSlides(2);
        setSlideHeight(125);
      } else {
        setVisibleSlides(4);
        setSlideHeight(105);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Llama a la función al cargar el componente

    fetchProductos();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleProductClick = (product) => {
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

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(value);
  };

  return (
    <div className={styles.productosContainer}>
      <h2>PRODUCTOS DESTACADOS</h2>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={slideHeight}
        totalSlides={productos.length}
        visibleSlides={visibleSlides}
        infinite={true}
        className={styles.carousel}
      >
        <div className={styles.carouselWrapper}>
          <ButtonBack className={styles.carouselButtonBack}>←</ButtonBack>
          <Slider className={styles.slider}>
            {productos.map((producto, index) => (
              <Slide index={index} key={producto._id} className="p-6">
                <div
                  onClick={() => handleProductClick(producto)}
                  className="bg-white p-4 rounded-lg shadow-md max-w-xs cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
                >
                  <div className="relative w-full h-48 md:h-64 mb-4">
                    <Image
                      src={producto.imageUrl}
                      alt={producto.name}
                      fill
                      style={{ objectFit: "contain" }}
                      className="rounded"
                    />
                  </div>
                  <h3 className="font-semibold text-center text-base md:text-2xl">
                    {producto.name}
                  </h3>
                  <p className="text-center md:text-3xl">
                    {formatCurrency(producto.price)}
                  </p>
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
