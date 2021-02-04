/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './styles/NotFound.scss';
const NotFound = () => {
  return (
    <section className="todo">
      <section class="er-complete">
        <span>4</span>
        <span>
          <span class="zero-text">0</span>
        </span>
        <span>4</span>
      </section>
      <div class="link-container">
        <a href="/" className="linkss">
          Regresar al Home para ver tu producto
        </a>
      </div>
    </section>
  );
};

export default NotFound;
