import Image from 'next/image';
import Link from 'next/link';
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
            <li><Link href="/alimentos">ALIMENTOS</Link></li>
            <li><Link href="/accesorios">ACCESORIOS</Link></li>
            <li><Link href="/aseo">ASEO</Link></li>
            <li><Link href="/indumentaria">INDUMENTARIA</Link></li>
            <li><Link href="/juguetes">JUGUETES</Link></li>
          </ul>
        </div>
        <div className={styles.menu}>
          <h2>AYUDA</h2>
          <ul>
            <li>MEDIOS DE PAGO</li>
            <li>PREGUNTAS FRECUENTES</li>
            <li>TÉRMINOS Y CONDICIONES</li>
            <li><Link href="/contacto">ZONAS DE ENVÍO</Link></li>
            <li><Link href="/contacto">CONTACTO</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Ayuda;
