/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import RowCart from '../components/RowCart';
import { faCreditCard, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Carrito.scss';
const Carrito = () => {
  return (
    <div className="carrito">
      <div className="product">
        <div className="product_title-descuento">
          <h2>Obten gratis una compra con nostros + envio</h2>
          <small>
            Nueva menbrecia con un 50% de descuento a tan solo Q150
            <Link to="/noDisponible">Ver más ></Link>
          </small>
        </div>
        <div className="product_title">
          <h1>Tu carrito(3)</h1>
        </div>
        <div className="product_produts">
          <RowCart
            title="Jordan Fit new model"
            img="https://www.madbasket.com/5872/camiseta-manga-larga-jordan-jumpman.jpg"
            price="150"
            cantidad="1"
            size="US MEND LARGE"
            styler="4859126-012"
            id="497816452"
          />
          <RowCart
            title="Nike ultra Sport Reset"
            img="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/wbewy4ljwc5ccapwkl5c/calzado-de-running-quest-2-zFzv4V.jpg"
            price="800"
            cantidad="2"
            size="US MEND 10.5"
            styler="4978461-221"
            id="1649781230"
          />
          <RowCart
            title="Jordan sport edition 2"
            img="http://cdn.shopify.com/s/files/1/0450/6317/6348/products/high-top-jordan-basketball-shoes-mens-cushioning-light-basketball-sneakers-male-zapatos-hombre-breathable-outdoor-sports-shoes-692689_1200x1200.jpg?v=1601914002"
            price="1,250"
            cantidad="1"
            size="US MEND 10.5"
            styler="1647894-654"
            id="7845120964"
          />
        </div>
      </div>
      <div className="pago">
        <div className="pago_item title">
          <h2>Resumen Compra</h2>
        </div>
        <div className="pago_item">
          <Link className="link" to="/noDisponible">
            Tiene un código de promocion?
            <FontAwesomeIcon size="xs" className="icon" icon={faExclamationCircle} color="orangered" />
          </Link>
        </div>
        <div className="pago_item">
          <h3>
            Subtotal
            <FontAwesomeIcon size="xs" className="icon" icon={faExclamationCircle} color="orangered" />
          </h3>
          <h1>Q2,200</h1>
        </div>
        <div className="pago_item">
          <span className="entrega">Estimado usuario su producto llegara de 15-20 días. Total descuento</span>
          <h3>Q0.00</h3>
        </div>
        <div className="pago_item">
          <h2>Total</h2>
          <h1>Q2,200</h1>
        </div>
        <div className="botones">
          <button className="button_card">
            PAGAR CON <FontAwesomeIcon className="icon" icon={faCreditCard} />
          </button>
          <h2>Or</h2>
          <button className="paypal">
            PAGAR CON <img src="https://img.icons8.com/color/45+/000000/paypal.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
