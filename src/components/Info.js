import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Info.module.css';

function Info() {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoItem}>
        <FontAwesomeIcon icon={faTruck} className={styles.icon} />
        <h3>ENVÍOS SIN CARGO</h3>
        <p>Al momento de realizar tu compra podrás darnos los detalles para enviarte los productos a dónde estés.</p>
      </div>
      <div className={styles.infoItem}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <h3>ATENCIÓN PERSONALIZADA</h3>
        <p>Comunícate con nuestro personal especializado ante cualquier duda o consulta!</p>
      </div>
      <div className={styles.infoItem}>
        <FontAwesomeIcon icon={faDollarSign} className={styles.icon} />
        <h3>TODOS LOS MEDIOS DE PAGO</h3>
        <p>Contamos con todas las tarjetas y promociones para poder realizar tus sueños.</p>
      </div>
    </div>
  );
}

export default Info;
