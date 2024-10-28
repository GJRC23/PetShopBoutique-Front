import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      {/* Top Header */}
      <div className={styles.topHeader}>
        <p className="text-white">Mar del Plata – Falucho 2482</p>
        <a
          href="https://www.instagram.com/petshopboutique__/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="h-6 w-6 text-pink-500"
          />
        </a>
      </div>

      {/* Main Nav */}
      <nav className={styles.banner}>
        <div className="flex items-center justify-between w-full px-4 py-2 bg-[#8b4513]">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/Home">
              <Image
                src="https://res.cloudinary.com/dos14xhdl/image/upload/v1729617494/LogoPetshopBoutiqueHD_wqbe8o.jpg"
                alt="Logo Boutique"
                className="rounded w-16 h-16 md:w-20 md:h-20"
                width={80}
                height={80}
              />
            </Link>
          </div>

          {/* Hamburguer Icon */}
          <button className="md:hidden ml-auto" onClick={toggleMenu}>
            <FontAwesomeIcon
              icon={menuOpen ? faTimes : faBars}
              className="h-8 w-8 text-white"
            />
          </button>

          {/* Desktop Menu Items */}
          <ul className="hidden md:flex md:items-center md:space-x-8 flex-grow justify-evenly text-lg md:text-2xl inria-serif-regular">
            <li>
              <Link href="/alimentos" className="text-white hover:text-gray-300">
                ALIMENTOS
              </Link>
            </li>
            <li>
              <Link href="/accesorios" className="text-white hover:text-gray-300">
                ACCESORIOS
              </Link>
            </li>
            <li>
              <Link href="/aseo" className="text-white hover:text-gray-300">
                ASEO
              </Link>
            </li>
            <li>
              <Link href="/indumentaria" className="text-white hover:text-gray-300">
                INDUMENTARIA
              </Link>
            </li>
            <li>
              <Link href="/juguetes" className="text-white hover:text-gray-300">
                JUGUETES
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-white hover:text-gray-300">
                CONTACTO
              </Link>
            </li>
          </ul>
        </div>

        <h1 className="instrument-serif-regular">
          <Link href="/Home">PET SHOP BOUTIQUE</Link>
        </h1>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50">
          <ul className="flex flex-col items-center space-y-8 text-3xl text-white inria-serif-regular">
            <li>
              <Link href="/alimentos" onClick={toggleMenu}>
                ALIMENTOS
              </Link>
            </li>
            <li>
              <Link href="/accesorios" onClick={toggleMenu}>
                ACCESORIOS
              </Link>
            </li>
            <li>
              <Link href="/aseo" onClick={toggleMenu}>
                ASEO
              </Link>
            </li>
            <li>
              <Link href="/indumentaria" onClick={toggleMenu}>
                INDUMENTARIA
              </Link>
            </li>
            <li>
              <Link href="/juguetes" onClick={toggleMenu}>
                JUGUETES
              </Link>
            </li>
            <li>
              <Link href="/contacto" onClick={toggleMenu}>
                CONTACTO
              </Link>
            </li>
          </ul>
          {/* Botón de cierre */}
          <button
            onClick={toggleMenu}
            className="absolute top-14 right-5 text-white text-3xl z-60"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
