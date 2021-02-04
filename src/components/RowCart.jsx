import React from 'react';
import './styles/RowCart.scss';

const RowCart = ({ title, img, styler, size, cantidad, id, price }) => {
  return (
    <div className="RowCart">
      <div className="image">
        <img src={img} alt={title} />
      </div>
      <div className="dats">
        <div className="text">
          <div className="text_datos">
            <h3 className="title">{title}</h3>
            <div className="text_datos-caract">
              <div className="caracter">
                <h3>Styler:</h3>
                <span>{styler}</span>
              </div>
              <div className="caracter">
                <h3>Size:</h3>
                <span>US {size}</span>
              </div>
              <div className="caracter">
                <h3>Cantidad:</h3>
                <span>{cantidad} unidades</span>
              </div>
              <div className="caracter">
                <h3>Design ID:</h3>
                <span>{id}</span>
              </div>
            </div>
          </div>
          <div className="text_buttons">
            <button>Eliminar</button>
            <button>Editar</button>
          </div>
        </div>
        <div className="price">Q{price}</div>
      </div>
    </div>
  );
};

export default RowCart;
