import Image from "next/image";
import Link from "next/link";
import styles from "../styles/IconosSeleccion.module.css";

function IconosSeleccion() {
  return (
    <div className={styles.iconosContainer}>
      <div className={styles.icono}>
        <Link href="/alimentos">
          <Image
            src="https://res.cloudinary.com/dos14xhdl/image/upload/v1729617492/alimentos_uotpkb.png"
            alt="Alimentos"
            width={190}
            height={150}
          />
          <h3>ALIMENTOS</h3>
        </Link>
      </div>
      <div className={styles.icono}>
        <Link href="/accesorios">
          <Image
            src="https://res.cloudinary.com/dos14xhdl/image/upload/v1729617493/accesorios_lc8wjy.png"
            alt="Accesorios"
            width={200}
            height={150}
          />
          <h3>ACCESORIOS</h3>
        </Link>
      </div>
      <div className={styles.icono}>
        <Link href="/aseo">
          <Image
            src="https://res.cloudinary.com/dos14xhdl/image/upload/v1729617493/aseo_ffqxik.png"
            alt="Productos de Aseo"
            width={190}
            height={150}
          />
          <h3>ASEO</h3>
        </Link>
      </div>
    </div>
  );
}

export default IconosSeleccion;
