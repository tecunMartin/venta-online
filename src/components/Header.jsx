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
              <img
                src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/82410679_2622539271316417_9046607422222761984_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=UZJQZD3m80sAX9NGFFZ&_nc_ht=scontent-mia3-1.xx&oh=345c43a43856647ac1b6835cd693e40f&oe=604210B3"
                alt="User"
              />
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
