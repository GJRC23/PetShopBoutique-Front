import Image from 'next/image';
import styles from '../styles/Ayuda.module.css';

function Ayuda() {
  return (
    <div className={styles.ayudaContainer}>
      {/* Imagen del logo */}
      <div className={styles.logo}>
        <Image 
          src="/images/logo_boutique.png" 
          alt="Logo Boutique" 
          width={300} 
          height={200} 
        />
      </div>
      
      {/* Menús de Tienda y Ayuda */}
      <div className={styles.menuContainer}>
        <div className={styles.menu}>
          <h2>TIENDA</h2>
          <ul>
            <li>ALIMENTOS</li>
            <li>ACCESORIOS</li>
            <li>INDUMENTARIA</li>
            <li>JUGUETES</li>
          </ul>
        </div>
        <div className={styles.menu}>
          <h2>AYUDA</h2>
          <ul>
            <li>MEDIOS DE PAGO</li>
            <li>PREGUNTAS FRECUENTES</li>
            <li>TÉRMINOS Y CONDICIONES</li>
            <li>ZONAS DE ENVÍO</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ayuda;
