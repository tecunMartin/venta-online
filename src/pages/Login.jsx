import React from 'react';
import { Link } from 'react-router-dom';

const login = () => {
  return (
    <div>
      Login
      <Link to="/registrarse">Registrarse</Link>
    </div>
  );
};

export default login;
