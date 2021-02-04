import React from 'react';
import { faComments, faTabletAlt, faUserCheck } from '@fortawesome/free-solid-svg-icons';
import Contacto from '../components/Contacto';
import './styles/Contactanos.scss';
const Contactanos = () => {
  return (
    <div>
      <section id="Home">
        <div class="container">
          <h1> </h1>
        </div>
      </section>
      <section id="contactanos">
        <h1>Contactanos</h1>
        <h3>Por favor seleccione una opción</h3>
      </section>
      <div id="s_contac">
        <Contacto
          icon={faTabletAlt}
          title="Demostración"
          subtitle="Solicite una demostración de las galardonadas soluciones de instalación diferenciadas de reach3000."
        />
        <Contacto
          icon={faComments}
          title="Consulta de ventas"
          subtitle="Comuníquese con nuestro equipo de ventas directamente para obtener asistencia inmediata con todas las consultas relacionadas con las ventas."
        />
        <Contacto
          icon={faUserCheck}
          title="Atención al cliente"
          subtitle="Póngase en contacto con el servicio de atención al cliente para obtener ayuda con la implementación de su logro."
        />
      </div>
    </div>
  );
};

export default Contactanos;
