import Image from 'next/image';
import styles from '../styles/Galeria.module.css';

function Galeria() {
  return (
    <div className={styles.galeriaContainer}>
      <div className={styles.imagen}>
        <Image 
          src="/images/galeria1.png" 
          alt="Imagen 1" 
          width={400} 
          height={300} 
        />
      </div>
      <div className={styles.imagen}>
        <Image 
          src="/images/galeria2.png" 
          alt="Imagen 2" 
          width={400} 
          height={300} 
        />
      </div>
      <div className={styles.imagen}>
        <Image 
          src="/images/galeria3.png" 
          alt="Imagen 3" 
          width={400} 
          height={300} 
        />
      </div>
      <div className={styles.imagen}>
        <Image 
          src="/images/galeria4.png" 
          alt="Imagen 4" 
          width={400} 
          height={300} 
        />
      </div>
    </div>
  );
}

export default Galeria;
