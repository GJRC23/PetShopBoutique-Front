import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from '../styles/PagosFaqTnC.module.css';

const PagosFAQTnC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        {/* Medios de pago */}
        <section className="mb-12">
          <h3 className={`${styles.pagosTitle} font-bold mb-4`}>MEDIOS DE PAGO</h3>
          <h3 className="mb-2 font-semibold">Aceptamos los siguientes medios de pago:</h3>
          <ul className="ml-5 text-black">
            <li><p>* Efectivo Contra Entrega</p></li>
            <li><p>* Transferencia Bancaria</p></li>
            <li><p>* Mercado Pago</p></li>
            <li><p>* Tarjeta de Débito y Crédito</p></li>
          </ul>
        </section>

        {/* Preguntas frecuentes */}
        <section className="mb-12">
          <h3 className={`${styles.pagosTitle} font-bold mb-4`}>PREGUNTAS FRECUENTES</h3>
          <div className="mb-4">
            <h3 className="font-semibold">¿ Cuál es su horario ?</h3>
            <p>Lunes a viernes: 9:30 a 13:30 y de 16:00 a 21:00</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">¿ Tienen local físico ? ¿ Dónde ?</h3>
            <p>Tenemos local fisico en Mar del Plata, en falucho 2482</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PagosFAQTnC;
