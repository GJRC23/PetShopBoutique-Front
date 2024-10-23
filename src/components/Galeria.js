import Image from 'next/image';
import styles from '../styles/Galeria.module.css';

function Galeria() {
  return (
    <div className={styles.galeriaContainer}>
      <div className={styles.imagen}>
        <Image 
          src="https://res.cloudinary.com/dos14xhdl/image/upload/v1729617494/galeria1_fyp6yv.png" 
          alt="Imagen 1" 
          width={400} 
          height={300} 
        />
      </div>
      <div className={styles.imagen}>
        <Image 
          src="https://res.cloudinary.com/dos14xhdl/image/upload/v1729617494/galeria2_v0uc43.png" 
          alt="Imagen 2" 
          width={400} 
          height={300} 
        />
      </div>
      <div className={styles.imagen}>
        <Image 
          src="https://res.cloudinary.com/dos14xhdl/image/upload/v1729617495/galeria3_jdosig.png" 
          alt="Imagen 3" 
          width={400} 
          height={300} 
        />
      </div>
      <div className={styles.imagen}>
        <Image 
          src="https://res.cloudinary.com/dos14xhdl/image/upload/v1729617494/galeria4_flxv27.png" 
          alt="Imagen 4" 
          width={400} 
          height={300} 
        />
      </div>
    </div>
  );
}

export default Galeria;
