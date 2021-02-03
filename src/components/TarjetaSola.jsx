/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import './styles/TarjetaSola.scss';
const TarjetaSola = ({ title, img }) => {
  return (
    <div className="tarjeta">
      <div className="tarjeta_title">
        <span>{title}</span>
      </div>
      <div className="tarjeta_filas-primera">
        <div className="imagens">
          <img src={img} alt="Imagen tarjeta" />
        </div>
      </div>
      <div className="link sola">
        <a href="/categorias">Ver más</a>
      </div>
    </div>
  );
};

export default TarjetaSola;
