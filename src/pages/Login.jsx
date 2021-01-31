import React from 'react';
import { Link } from 'react-router-dom';
import { faUserCircle, faKey } from '@fortawesome/free-solid-svg-icons';
import Inputs from '../components/Inputs';
import './styles/Login.scss';
const login = () => {
  return (
    <div className="form_complet">
      <h1>Iniciar Sesión</h1>
      <form>
        <div className="input_input">
          <Inputs type="email" placeholder="Ingrese su correo electrónico" icon={faUserCircle} />
        </div>
        <div className="input_input">
          <div className="contra">
            <Inputs type="password" placeholder="Ingrese su contraseña" icon={faKey} />
          </div>
        </div>
        <div className="usuarios">
          <div className="usuarios_recordar">
            <input type="checkbox" />
            Recordar nombre de usuario
          </div>
          <div className="usuarios_forgot">
            <a href="/me">Forgot Password?</a>
          </div>
        </div>
        <div className="or">or</div>
        <div className="registro">
          ¿Aún no tiene cuenta?
          <div>
            <Link className="link" to="/registrarse">
              registrate
            </Link>
            con nosotros.
          </div>
        </div>
      </form>
      <a className="button_Submit" href="/">
        Acceder
      </a>
    </div>
  );
};

export default login;
