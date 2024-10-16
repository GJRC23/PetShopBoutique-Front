import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import logo from "/public/images/logo_boutique.png";

function Header() {
  return (
    <header className={styles.header}>
  
      {/* Top Header */}
      <div className={styles.topHeader}>
        <p className='text-white'>Mar del Plata – Falucho 2482</p>
        <a href="https://www.instagram.com/petshopboutique__/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-pink-500" />
        </a>
      </div>

      <div className={styles.banner}>
        <nav className={styles.navBar}>
        <Link href="/Home"><Image src={logo} alt="Logo Boutique" width={100} height={100} /></Link>
          <ul className="inria-serif-regular">
            <li><Link href="/alimentos">ALIMENTOS</Link></li>
            <li><Link href="/accesorios">ACCESORIOS</Link></li>
            <li><Link href="/indumentaria">INDUMENTARIA</Link></li>
            <li><Link href="/juguetes">JUGUETES</Link></li>
            <li><Link href="/contacto">ZONAS DE ENVÍO</Link></li>
            <li><Link href="/contacto">CONTACTO</Link></li>
          </ul>
        </nav>
        <h1 className="instrument-serif-regular"><Link href="/Home">PET SHOP BOUTIQUE</Link></h1>
      </div>
    </header>
  );
}

export default Header;
