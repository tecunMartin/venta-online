import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Inputs.scss';
const Inputs = ({ icon, type, placeholder, rq }) => {
  return (
    <div className="input">
      <div className="input_icon">
        <FontAwesomeIcon className="input_icon-icons" icon={icon} />
      </div>
      <div className="input_insert">
        <input required={rq | false} type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default Inputs;
