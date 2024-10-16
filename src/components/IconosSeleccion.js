import Image from "next/image";
import Link from "next/link";
import styles from "../styles/IconosSeleccion.module.css";

function IconosSeleccion() {
  return (
    <div className={styles.iconosContainer}>
      <div className={styles.icono}>
        <Link href="/alimentos">
          <Image
            src="/images/alimentos.png"
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
            src="/images/accesorios.png"
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
            src="/images/aseo.png"
            alt="Productos de Aseo"
            width={190}
            height={150}
          />
          <h3>PRODUCTOS DE ASEO</h3>
        </Link>
      </div>
    </div>
  );
}

export default IconosSeleccion;
