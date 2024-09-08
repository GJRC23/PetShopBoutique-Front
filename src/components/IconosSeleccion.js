import Image from 'next/image';
import styles from '../styles/IconosSeleccion.module.css';

function IconosSeleccion() {
  return (
    <div className={styles.iconosContainer}>
      <div className={styles.icono}>
        <Image src="/images/alimentos.png" alt="Alimentos" width={150} height={150} />
        <h3>ALIMENTOS</h3>
      </div>
      <div className={styles.icono}>
        <Image src="/images/accesorios.png" alt="Accesorios" width={150} height={150} />
        <h3>ACCESORIOS</h3>
      </div>
      <div className={styles.icono}>
        <Image src="/images/aseo.jpg" alt="Productos de Aseo" width={150} height={150} />
        <h3>PRODUCTOS DE ASEO</h3>
      </div>
    </div>
  );
}

export default IconosSeleccion;
