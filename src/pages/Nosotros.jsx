import React from 'react';
import { faStore, faTags, faUsers } from '@fortawesome/free-solid-svg-icons';
import AboutUs from '../components/AboutUs';
import './styles/Nosotros.scss';

const Nosotros = () => {
  return (
    <div>
      <section id="Wallpaper">
        <div class="container">
          <h1> </h1>
        </div>
      </section>
      <section id="contactanos">
        <h1>Acerca de nosotros</h1>
        <h3>Para más info. seleccione una opción</h3>
      </section>
      <div id="s_contac">
        <AboutUs
          icon={faUsers}
          title="¿Quienes somos?"
          subtitle="Somos una empresa dedicada a la venta de ropa y accesorios tanto para caballero como para dama."
          button="Más información"
        />
        <AboutUs
          icon={faTags}
          title="¿Cúal es nuestra mision?"
          subtitle="Ofrecer a nuestros clientes prendas y accesorios de las mejores marcas 100% originales, con los precios más bajos del mercado."
          button="Más información"
        />
        <AboutUs
          icon={faStore}
          title="¿Por qué escogernos?"
          subtitle="Encontraras variedad de producto de las mejores marcas y diseñadores para todas las edades u ocasiones"
          button="Nuestros productos"
          direccion="/categorias"
        />
      </div>
    </div>
  );
};

export default Nosotros;
