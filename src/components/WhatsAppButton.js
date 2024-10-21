import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const phoneNumber = '2233477856'; // Número del local

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 right-4 z-50 p-4 bg-green-500 rounded-full text-white shadow-lg hover:bg-green-600 transition duration-300"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="2x" />
    </a>
  );
};

export default WhatsAppButton;
