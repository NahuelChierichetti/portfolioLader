import React from 'react';
import { Link } from 'react-router-dom'
import { IoLogoWhatsapp } from "react-icons/io5";
import './WhatsAppLink.css'

const WhatsAppLink = ({ phoneNumber, message }) => {
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link to={whatsappURL} target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
      <IoLogoWhatsapp className="bi bi-whatsapp" />
    </Link>
  );
};

export default WhatsAppLink;