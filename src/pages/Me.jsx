import React from 'react';
import './styles/Me.scss';

const Me = () => {
  return (
    <div>
      <section id="wallpaper"></section>
      <div class="perfil">
        <div class="user_photo">
          <img
            src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/82410679_2622539271316417_9046607422222761984_n.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=UZJQZD3m80sAX9NGFFZ&_nc_ht=scontent-mia3-1.xx&oh=345c43a43856647ac1b6835cd693e40f&oe=604210B3"
            alt="User"
          />
        </div>
        <div class="datos">
          <h2>Activo:</h2>
          <p>Activo ahora</p>
          <h2>Carné</h2>
          <p>2016228</p>
          <h2>Nombres:</h2>
          <p>Martin Alejandro</p>
          <h2>Apellidos:</h2>
          <p>Tecún Charles</p>
          <h2>Correo electrónico:</h2>
          <p>mtecun-2016228@kinal.edu.gt</p>
          <h2>Teléfono:</h2>
          <p>401557945</p>
          <h2>Compañia:</h2>
          <p>Kinal</p>
          <h2>Trabajo:</h2>
          <p>Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Me;
