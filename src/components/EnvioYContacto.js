import styles from '../styles/EnvioYContacto.module.css';

function EnvioYContacto() {
  return (
    <div className={styles.container}>
      <div className={styles.infoEnvio}>
        <h2>Información y Zonas de Envío</h2>
        <p>Ofrecemos envíos rápidos y seguros a todo el país. Puedes elegir entre diferentes métodos de envío durante el proceso de compra.</p>
        <ul>
          <li>Envío estándar: 3-5 días hábiles</li>
          <li>Envío express: 1-2 días hábiles</li>
          <li>Recogida en tienda</li>
        </ul>
      </div>

      <div className={styles.formularioContacto}>
        <h2>Contáctanos</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default EnvioYContacto;
