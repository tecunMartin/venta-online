import React from 'react';
import { Link } from 'react-router-dom';
import { faCartPlus, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Header.scss';
const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/">
          <img src="https://raw.githubusercontent.com/tecunMartin/venta-online/main/src/img/logo.png" alt="BABYMODA" />
        </Link>
      </div>

      <div className="header_categorias">
        <Link to="/categorias">
          <div className="header_categorias--item">Categorias</div>
        </Link>
        <Link to="/contactanos">
          <div className="header_categorias--item">Contactanos</div>
        </Link>
        <Link to="/nosotros">
          <div className="header_categorias--item">About us</div>
        </Link>
        <Link to="/carrito">
          <div className="header_categorias--item">
            <FontAwesomeIcon icon={faCartPlus} />
          </div>
        </Link>
        <Link to="/me">
          <div className="header_categorias--item">
            <div className="user">
              <img src="https://agenciaseo.eu/wp-content/uploads/2020/04/perfil-de-buyer-persona-750x480.jpg" alt="User" />
            </div>
          </div>
        </Link>
        <Link to="/login">
          <div className="header_categorias--item">
            <FontAwesomeIcon icon={faPowerOff} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
