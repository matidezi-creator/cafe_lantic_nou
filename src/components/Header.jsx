import React from "react";
import "../assets/css/estilos.css";

const Header = () => {
  return (
    <header className="header" id="inici">
      <nav className="navbar">
        <ul>
          <li><a href="#about">Sobre nosaltres</a></li>
          <li><a href="#menu">Menú</a></li>
          <li><a href="#gallery">Galeria</a></li>
          <li><a href="#location">Ubicació</a></li>
        </ul>
      </nav>

      <div className="header-content">
        <h1><strong>Cafè</strong> L’Antic & Nou</h1>
        <p>Un cafè amb ànima d’ahir i sabor d’avui</p>
        <a href="#menu" className="btn">Descobreix el menú</a>
      </div>
    </header>
  );
};

export default Header;
