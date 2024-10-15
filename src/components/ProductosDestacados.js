import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'; // Importamos los estilos del carrusel
import styles from '../styles/ProductosDestacados.module.css'; // Asegúrate de tener el archivo CSS

function ProductosDestacados() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('/api/products'); // Ajusta la URL aquí
        if (!response.ok) {
          throw new Error('Error al cargar los productos');
        }
        const data = await response.json();
        setProductos(data.filter(producto => producto.isFeatured)); // Cambié a 'isFeatured'
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };    
    fetchProductos();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (productos.length === 0) {
    return <p>No hay productos destacados en este momento.</p>;
  }

  return (
    <div className={styles.productosContainer}>
      <h2>PRODUCTOS DESTACADOS</h2>

      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={productos.length}
        visibleSlides={4}
        infinite={true}
        className={styles.carousel}
      >
        <div className={styles.carouselWrapper}>
          <ButtonBack className={styles.carouselButtonBack}>←</ButtonBack>
          <Slider className={styles.slider}>
            {productos.map((producto, index) => (
              <Slide index={index} key={producto.id} className={styles.slide}>
                <div className={styles.producto}>
                  <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    width={150}
                    height={150}
                    className={styles.productoImagen}
                  />
                  <h3>{producto.nombre}</h3>
                  <p className={styles.productoPrecio}>${producto.precio}</p>
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
