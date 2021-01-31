// Importaciones react.
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Paginas.
import Layout from './Layout';
import Home from '../pages/Home';
import Productos from '../pages/Productos';
import NotFound from '../pages/NotFound';

// Styles.
import '../global.scss';
import Login from '../pages/Login';
import Registrarse from '../pages/Registrarse';
import Contactanos from '../pages/Contactanos';
import Nosotros from '../pages/Nosotros';
import Me from '../pages/Me';
import Carrito from '../pages/Carrito';
import Categoria from '../pages/Categoria';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/registrarse" component={Registrarse} />
          <Route exact path="/contactanos" component={Contactanos} />
          <Route exact path="/nosotros" component={Nosotros} />
          <Route exact path="/me" component={Me} />
          <Route exact path="/carrito" component={Carrito} />
          <Route exact path="/productos" component={Productos} />
          <Route exact path="/categorias" component={Categoria} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
