import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={`${styles.infoProducto} text-white`}>Pet Shop Boutique 2024</p>
      <a href="https://www.instagram.com/petshopboutique__/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="h-6 w-6 text-pink-500" />
      </a>
    </footer>
  );
}

export default Footer;
