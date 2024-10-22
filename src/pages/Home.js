import Footer from '../components/Footer';
import IconosSeleccion from '@/components/IconosSeleccion';
import ProductosDestacados from '../components/ProductosDestacados';
import Galeria from '../components/Galeria';
import Info from '../components/Info';
import Ayuda from '../components/Ayuda';
import Header from '../components/Header';
import WhatsAppButton from '../components/WhatsAppButton';


export default function Home() {
  return (
    <div className="max-w-full mx-auto overflow-hidden">
      <Header />
      <main>
        <IconosSeleccion />
        <ProductosDestacados />
        <Galeria />
        <Info />
        <Ayuda />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
