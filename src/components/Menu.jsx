import React from "react";
import "../assets/css/estilos.css";

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="contenedor">
        <h3 className="titulo">Menú</h3>
        <div className="contenedor-menu">
          <div className="contenedor-menu2">
            
            <article>
              <p className="categoria">Per menjar</p>
              <div className="platillo">
                <p className="nombre">Torrades amb alvocat i ou poché</p>
                <p className="precio">€7.50</p>
                <p className="descripcion">
                  Pa de sègol torrat amb alvocat, ou poché i un toc de pebre negre.
                </p>
              </div>

              <div className="platillo">
                <p className="nombre">Croissant de pernil i formatge</p>
                <p className="precio">€4.20</p>
                <p className="descripcion">
                  Croissant artesà farcit de pernil dolç i formatge suís fos.
                </p>
              </div>

              <div className="platillo">
                <p className="nombre">Pastís de pastanaga</p>
                <p className="precio">€4.80</p>
                <p className="descripcion">
                  Esponjós pastís casolà amb crema de formatge suau.
                </p>
              </div>

              <div className="platillo">
                <p className="nombre">Sandvitx de pollastre grillat</p>
                <p className="precio">€8.90</p>
                <p className="descripcion">
                  Pollastre marinat, enciam, tomàquet i maionesa de mostassa.
                </p>
              </div>
            </article>

            <article>
              <p className="categoria">Per beure</p>
              <div className="platillo">
                <p className="nombre">Cafè espresso</p>
                <p className="precio">€1.80</p>
                <p className="descripcion">
                  Gra d’origen sostenible torrat artesanalment.
                </p>
              </div>

              <div className="platillo">
                <p className="nombre">Cappuccino</p>
                <p className="precio">€2.50</p>
                <p className="descripcion">
                  Espresso amb llet cremosa i escuma de llet suau.
                </p>
              </div>

              <div className="platillo">
                <p className="nombre">Suc natural de taronja</p>
                <p className="precio">€3.20</p>
                <p className="descripcion">
                  Taronja acabada d’esprémer, sense sucres afegits.
                </p>
              </div>

              <div className="platillo">
                <p className="nombre">Te verd amb menta</p>
                <p className="precio">€2.30</p>
                <p className="descripcion">
                  Infusió refrescant i lleugera, ideal per a qualsevol moment del dia.
                </p>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

