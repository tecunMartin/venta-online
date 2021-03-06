import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Contacto.scss';
import { Link } from 'react-router-dom';

/*
 **Icon,
 **Title,
 **subtitle
 */

const Contacto = ({ icon, title, subtitle, direccion = '/noDisponible' }) => {
  return (
    <div>
      <div className="contactos">
        <div className="contactos_icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Link className="Link" to={direccion}>
          Ir a la página >
        </Link>
      </div>
    </div>
  );
};

export default Contacto;
