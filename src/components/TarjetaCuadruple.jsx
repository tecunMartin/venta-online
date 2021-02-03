import React from 'react';
import './styles/TarjetaCuadruple.scss';
const TarjetaCuadruple = ({ title, img1, subtitle1, img2, subtitle2, img3, subtitle3, img4, subtitle4 }) => {
  return (
    <div className="tarjeta">
      <div className="tarjeta_title">
        <span>{title}</span>
      </div>
      <div className="tarjeta_filas">
        <div className="tarjeta_filas-primera">
          <div className="tarjeta_filas-linea first">
            <div className="imagen">
              <img src={img1} alt="Imagen tarjeta" />
            </div>
            <span>{subtitle1}</span>
          </div>
          <div className="tarjeta_filas-linea">
            <div className="imagen">
              <img src={img2} alt="Imagen tarjeta" />
            </div>
            <span>{subtitle2}</span>
          </div>
        </div>
        <div className="tarjeta_filas-segunda">
          <div className="tarjeta_filas-linea first">
            <div className="imagen">
              <img src={img3} alt="Imagen tarjeta" />
            </div>
            <span>{subtitle3}</span>
          </div>
          <div className="tarjeta_filas-linea">
            <div className="imagen">
              <img src={img4} alt="Imagen tarjeta" />
            </div>
            <span>{subtitle4}</span>
          </div>
        </div>
      </div>
      <div className="link">
        <a href="/categorias">Ver más</a>
      </div>
    </div>
  );
};

export default TarjetaCuadruple;
