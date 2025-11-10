import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Bloque 1 – Contacte */}
        <div className="footer-block contacto">
          <h4>Contacte</h4>
          <p>Carrer de Mallorca, 424, L'Eixample</p>
          <p>08013 Barcelona</p>
          <p>+34 671 32 39 50</p>
          <p>contacte@cafelanticnou.com</p>
        </div>

        {/* Bloque 2 – Horaris */}
        <div className="footer-block horarios">
          <h4>Horaris</h4>
          <p>Dilluns a Divendres: 8:00am - 9:00pm</p>
          <p>Dissabtes i Diumenges: 11:00am - 11:00pm</p>
        </div>

        {/* Bloque 3 – Xarxes socials */}
        <div className="footer-block redes">
          <h4>Xarxes socials</h4>
          <div className="icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://wa.me/34671323950" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2025 Café L’Antic Nou. Tots els drets reservats.</p>
      </div>
    </footer>
  );
};

export default Footer;
