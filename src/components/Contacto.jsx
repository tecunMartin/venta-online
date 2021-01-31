import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Contacto.scss';

/*
 **Icon,
 **Title,
 **subtitle
 */

const Contacto = ({ icon, title, subtitle }) => {
  return (
    <div>
      <div className="contactos">
        <div className="contactos_icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <button>Ir a la página ></button>
      </div>
    </div>
  );
};

export default Contacto;
