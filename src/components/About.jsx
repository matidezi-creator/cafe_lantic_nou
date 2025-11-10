import React from "react";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-overlay"></div>

      <div className="about-container">
        <div className="about-image">
          {/* usamos ruta absoluta desde /assets */}
          <img src="/img/acerca-de.jpg" alt="Cafè L’Antic & Nou" />
        </div>

        <article className="about-text">
          <h2>Sobre nosaltres</h2>
          <p>
            A <strong>L’Antic & Nou</strong> volem mantenir viva l’essència del
            cafè tradicional amb un toc modern. Treballem amb gra d’origen
            sostenible, torrat artesanalment, i oferim una experiència càlida i
            autèntica en cada tassa.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
