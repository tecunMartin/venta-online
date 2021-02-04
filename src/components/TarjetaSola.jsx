/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/TarjetaSola.scss';
const TarjetaSola = ({ title, img, direccion = '/categorias' }) => {
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
        <Link to={direccion}>Ver más</Link>
      </div>
    </div>
  );
};

export default TarjetaSola;
