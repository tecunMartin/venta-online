import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Inputs from './Inputs';
import './styles/Footer.scss';
const Footer = () => {
  return (
    <section className="datos_cliente">
      <div className="general">
        <h3>Contacto General</h3>
        <span>Toll-free: 888-938-6822</span>
        <span>Phone:732-367-5505</span>
        <span>Fax:732-367-2313</span>
        <span>
          <a href="mailto:blackred@gmail.com">Email</a>
        </span>
      </div>
      <form className="personal">
        <h3>Contacto General</h3>
        <div className="inputs_envio">
          <Inputs icon={faUser} type="email" placeholder="Ingrese correo electrónico" />
          <button>Enviar</button>
        </div>
      </form>
    </section>
  );
};

export default Footer;
