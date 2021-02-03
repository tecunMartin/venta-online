import React from 'react';
import { faStore, faTags, faUsers } from '@fortawesome/free-solid-svg-icons';
import AboutUs from '../components/AboutUs';
import './styles/Nosotros.scss';

const Nosotros = () => {
  return (
    <div>
      <section id="Wallpaper">
        <div class="container">
          <h1></h1>
        </div>
      </section>
      <section id="contactanos">
        <h1>Hacerca de nosotros</h1>
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
          subtitle="Dar el mejor precio por la mejor calidad, buscamos que tengas lo mejor de las distintas marcas y que siempre tengas el mejor precio con nosotros."
          button="Más información"
        />
        <AboutUs
          icon={faStore}
          title="¿Por qué escogernos?"
          subtitle="Tenemos la mayor variedad de productos en todas la tiendas en linea, tambie tenemos lo más cotizado por los clietes"
          button="Nuestros productos"
          direccion="/categorias"
        />
      </div>
    </div>
  );
};

export default Nosotros;
