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
          <p className="mb-2">Aceptamos los siguientes medios de pago:</p>
          <ul className="ml-5 text-black">
            <li><p>* Tarjetas de crédito y débito (Visa, MasterCard, American Express)</p></li>
            <li><p>* Transferencia bancaria</p></li>
            <li><p>* Mercado Pago</p></li>
            <li><p>* Pago contra entrega</p></li>
          </ul>
        </section>

        {/* Preguntas frecuentes */}
        <section className="mb-12">
          <h3 className={`${styles.pagosTitle} font-bold mb-4`}>PREGUNTAS FRECUENTES</h3>
          <div className="mb-4">
            <h3 className="font-semibold">¿Cómo puedo rastrear mi pedido?</h3>
            <p>Puedes rastrear tu pedido con el número de seguimiento proporcionado al momento de la compra.</p>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold">¿Cuál es la política de devolución?</h3>
            <p>Dispones de 30 días para devolver tu producto si no estás satisfecho con la compra.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PagosFAQTnC;
