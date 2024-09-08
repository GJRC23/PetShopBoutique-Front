import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../styles/ProductosDestacados.module.css';

function ProductosDestacados() {
  const [productos, setProductos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Simulando una llamada a la API
    const fetchProductos = async () => {
      const response = await fetch('/api/productos');
      const data = await response.json();
      setProductos(data.filter(producto => producto.destacado));
    };
    fetchProductos();
  }, []);

  const handleNext = () => {
    // Avanzar al siguiente producto, sin repetir hasta que lleguemos al último
    setCurrentIndex((prevIndex) =>
      prevIndex === productos.length - 4 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    // Retroceder al producto anterior, sin volver al primero hasta el final
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productos.length - 4 : prevIndex - 1
    );
  };

  return (
    <div className={styles.productosContainer}>
      <h2>PRODUCTOS DESTACADOS</h2>
      <div className={styles.carousel}>
        <button className={styles.arrow} onClick={handlePrev}>←</button>
        <div className={styles.productos}>
          {productos.slice(currentIndex, currentIndex + 4).map((producto, index) => (
            <div key={index} className={styles.producto}>
              <Image 
                src={producto.imagen}
                alt={producto.nombre}
                width={150}
                height={150}
              />
              <h3>{producto.nombre}</h3>
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={handleNext}>→</button>
      </div>
    </div>
  );
}

export default ProductosDestacados;
