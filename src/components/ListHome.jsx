/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import './styles/ListHome.scss';
const ListHome = ({ title, img1, img2, img3, img4, img5, img6 }) => {
  return (
    <div className="lista_completa">
      <div className="lista_completa-title">
        <span>{title}</span>
        <a href="/categorias">Ver más</a>
      </div>
      <div className="lista_completa-imagen">
        <img src={img1} alt="Garment error" />
        <img src={img2} alt="Garment error" />
        <img src={img3} alt="Garment error" />
        <img src={img4} alt="Garment error" />
        <img src={img5} alt="Garment error" />
        <img src={img6} alt="Garment error" />
      </div>
    </div>
  );
};

export default ListHome;
