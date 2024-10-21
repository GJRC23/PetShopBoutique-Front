import EnvioYContacto from '../components/EnvioYContacto.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contacto() {
  return (
    <div>
      <Header />
      <main>
        <EnvioYContacto />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
