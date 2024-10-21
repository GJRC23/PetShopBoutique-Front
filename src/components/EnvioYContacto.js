import React, { useState } from "react";
import axios from "axios";
import styles from "../styles/EnvioYContacto.module.css";

function EnvioYContacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backpetshopboutique.onrender.com/api/contacto",
        { name, email, message }
      );

      if (response.status === 200) {
        setSuccessMessage("¡Correo enviado con éxito!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setErrorMessage("Error al enviar el correo.");
      }
    } catch (error) {
      setErrorMessage("Error al enviar el correo.");
    }

    setTimeout(() => {
      setSuccessMessage("");
      setErrorMessage("");
    }, 3000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoEnvio}>
        <h2>Información y Zonas de Envío</h2>
        <p className="mb-2">
          Ofrecemos envíos rápidos y seguros a toda la ciudad de Mar del Plata.
          Puedes elegir también retirar los productos por el local.
        </p>
        <ul>
          <li>* Envío a Domicilio: 1-2 días hábiles</li>
          <li>* Entrega en local</li>
        </ul>
      </div>

      <div className={styles.formularioContacto}>
        <h2>Contáctanos</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>

          {successMessage && (
            <p className={styles.successMessage}>{successMessage}</p>
          )}
          {errorMessage && (
            <p className={styles.errorMessage}>{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default EnvioYContacto;
