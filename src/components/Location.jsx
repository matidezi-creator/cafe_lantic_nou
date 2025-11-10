import React from "react";

const Location = () => {
  return (
    <> 
      <section className="ubicacion" id="ubicacion">
        <div className="contenedor">
          <h3 className="titulo">Ubicació</h3>
          <div className="direccion">
            <p className="calle">
              Carrer de Mallorca, 424, L'Eixample<br />
              08013 Barcelona
            </p>
            <p className="telefono">+34 671 32 39 50</p>
            <p className="correo">contacte@cafelanticnou.com</p>
          </div>
          <div className="horarios">
            <h4>Horaris</h4>
            <p className="entre-semana">
              Dilluns a Divendres<br />
              8:00am - 9:00pm
            </p>
            <p className="fin-semana">
              Dissabtes i Diumenges<br />
              11:00am - 11:00pm
            </p>
          </div>
        </div>
      </section>

      <section className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d748.157233001918!2d2.1749922319568955!3d41.40386419441294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1761567077950!5m2!1ses!2ses"
          style={{ border: 0, width: "100%", height: "450px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Location;
