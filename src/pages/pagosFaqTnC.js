import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/PagosFaqTnC.module.css";
import WhatsAppButton from "../components/WhatsAppButton";

const PagosFAQTnC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 md:p-8">
        {/* Medios de pago */}
        <section className="mb-12 md:mb-16">
          <h3
            className={`${styles.pagosTitle} text-4xl md:text-6xl mb-4 text-center md:text-left`}
          >
            MEDIOS DE PAGO
          </h3>
          <h3 className="mb-2 text-4x1 md:text-2x1">
            Aceptamos los siguientes medios de pago:
          </h3>
          <ul className="ml-5">
            <li className="mb-2">
              <p>* Efectivo Contra Entrega</p>
            </li>
            <li className="mb-2">
              <p>* Transferencia Bancaria</p>
            </li>
            <li className="mb-2">
              <p>* Mercado Pago</p>
            </li>
            <li className="mb-2">
              <p>* Tarjeta de Débito y Crédito</p>
            </li>
          </ul>
        </section>

        {/* Preguntas frecuentes */}
        <section className="mb-12 md:mb-16">
          <h3
            className={`${styles.pagosTitle} text-4xl md:text-6xl mb-4 text-center md:text-left`}
          >
            PREGUNTAS FRECUENTES
          </h3>
          <div className="mb-4">
            <h3 className="text-4x1 md:text-2x1">
              ¿ Cuál es su horario ?
            </h3>
            <p className="text-base md:text-lg">
              Lunes a viernes: 9:30 a 13:30 y de 16:00 a 21:00
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-4x1 md:text-2x1">
              ¿ Tienen local físico ? ¿ Dónde ?
            </h3>
            <p className="text-base md:text-lg">
              Tenemos local fisico en Mar del Plata, en falucho 2482
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PagosFAQTnC;
