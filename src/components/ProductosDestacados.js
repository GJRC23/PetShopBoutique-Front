import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'; // Importamos los estilos del carrusel
import styles from '../styles/ProductosDestacados.module.css'; // Asegúrate de tener el archivo CSS

function ProductosDestacados() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Simulando una llamada a la API
    const fetchProductos = async () => {
      const response = await fetch('/api/productos');
      const data = await response.json();
      setProductos(data.filter(producto => producto.destacado));
    };
    fetchProductos();
  }, []);

  if (productos.length === 0) {
    return <p>Cargando productos...</p>; // Manejo de caso cuando los productos no están listos
  }

  return (
    <div className={styles.productosContainer}>
      <h2>PRODUCTOS DESTACADOS</h2>

      {/* Proveedor del Carrusel */}
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={productos.length}
        visibleSlides={4} // Mostrar 4 productos a la vez
        infinite={true} // Carrusel infinito
        className={styles.carousel}
      >
        <div className={styles.carouselWrapper}>
          {/* Botón de retroceso */}
          <ButtonBack className={styles.carouselButtonBack}>←</ButtonBack>

          {/* Carrusel */}
          <Slider className={styles.slider}>
            {productos.map((producto, index) => (
              <Slide index={index} key={producto.id} className={styles.slide}>
                <div className={styles.producto}>
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    width={150}
                    height={150}
                  />
                  <h3>{producto.nombre}</h3>
                </div>
              </Slide>
            ))}
          </Slider>

          {/* Botón de avance */}
          <ButtonNext className={styles.carouselButtonNext}>→</ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
}

export default ProductosDestacados;
