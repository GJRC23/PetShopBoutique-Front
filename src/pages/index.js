import Footer from '../components/Footer';
import IconosSeleccion from '@/components/IconosSeleccion';
import ProductosDestacados from '../components/ProductosDestacados';
import Header from '../components/Header';


export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <IconosSeleccion />
        <ProductosDestacados />
      </main>
      <Footer />
    </div>
  );
}
