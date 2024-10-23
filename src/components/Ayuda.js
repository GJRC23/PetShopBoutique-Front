import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Ayuda.module.css";

function Ayuda() {
  return (
    <div className={styles.ayudaContainer}>
      {/* Imagen del logo */}
      <div className={styles.logo}>
        <Image
          src="https://res.cloudinary.com/dos14xhdl/image/upload/v1729617494/LogoPetshopBoutiqueHD_wqbe8o.jpg"
          alt="Logo Boutique"
          className="rounded"
          width={300}
          height={200}
        />
      </div>

      {/* Menú de Tienda */}
      <div className={styles.menu}>
        <h2>TIENDA</h2>
        <ul>
          <li>
            <Link href="/alimentos">ALIMENTOS</Link>
          </li>
          <li>
            <Link href="/accesorios">ACCESORIOS</Link>
          </li>
          <li>
            <Link href="/aseo">ASEO</Link>
          </li>
          <li>
            <Link href="/indumentaria">INDUMENTARIA</Link>
          </li>
          <li>
            <Link href="/juguetes">JUGUETES</Link>
          </li>
        </ul>
      </div>

      {/* Menú de Ayuda */}
      <div className={styles.menu}>
        <h2>AYUDA</h2>
        <ul>
          <li>
            <Link href="/pagosFaqTnC">MEDIOS DE PAGO</Link>
          </li>
          <li>
            <Link href="/pagosFaqTnC">PREGUNTAS FRECUENTES</Link>
          </li>
          <li>
            <Link href="/pagosFaqTnC">TÉRMINOS Y CONDICIONES</Link>
          </li>
          <li>
            <Link href="/contacto">ZONAS DE ENVÍO</Link>
          </li>
          <li>
            <Link href="/contacto">CONTACTO</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Ayuda;
