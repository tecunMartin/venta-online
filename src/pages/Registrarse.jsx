import React from 'react';
import { Link } from 'react-router-dom';
import { faBuilding, faEnvelope, faFileSignature, faKey, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Inputs from '../components/Inputs';
import './styles/Registrarse.scss';
const Registrarse = () => {
  return (
    <div className="form_complet">
      <h1>Registrar Cuenta</h1>
      <form>
        <div className="input_input">
          <Inputs type="email" placeholder="Ingrese su correo electrónico" icon={faEnvelope} />
        </div>
        <div className="input_input">
          <div className="contra">
            <Inputs type="text" placeholder="Ingrese su nombre" icon={faFileSignature} />
          </div>
        </div>
        <div className="input_input">
          <div className="contra">
            <Inputs type="text" placeholder="Ingrese su apellido" icon={faFileSignature} />
          </div>
        </div>
        <div className="input_input">
          <div className="contra">
            <Inputs type="password" placeholder="Ingrese su contraseña" icon={faKey} />
          </div>
        </div>
        <div className="input_input">
          <div className="contra">
            <Inputs type="phone" placeholder="Ingrese su número de teléfono" icon={faPhoneVolume} />
          </div>
        </div>
        <div className="input_input">
          <div className="contra">
            <Inputs type="text" placeholder="Ingrese su nombre de empresa" icon={faBuilding} />
          </div>
        </div>
        <div className="usuarios">
          <div className="usuarios_recordar">
            <input type="checkbox" />
            Aceptar terminos y condiciones
          </div>
          <div className="usuarios_forgot">
            <a href="/me">Saber más información</a>
          </div>
        </div>
        <div className="or">or</div>
        <div className="registro">
          ¿Ya tienes cuenta?
          <div>
            <Link className="link" to="/login">
              logeate
            </Link>
            con nosotros.
          </div>
        </div>
      </form>
      <a className="button_Submit" href="/login">
        Regístrate
      </a>
    </div>
  );
};

export default Registrarse;
