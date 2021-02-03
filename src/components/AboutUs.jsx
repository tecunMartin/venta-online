import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/AboutUs.scss';
import { Link } from 'react-router-dom';

/*
 **Icon,
 **Title,
 **subtitle
 */

const AboutUs = ({ icon, title, subtitle, button, direccion = '/noDisponible' }) => {
  return (
    <div>
      <div className="aboutUs">
        <div className="contactos_icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Link className="Link" to={direccion}>
          {button}
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
