import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/Inputs.scss';
const Inputs = (props) => {
  return (
    <div className="input">
      <div className="input_icon">
        <FontAwesomeIcon className="input_icon-icons" icon={props.icon} />
      </div>
      <div className="input_insert">
        <input type={props.type} placeholder={props.placeholder} />
      </div>
    </div>
  );
};

export default Inputs;
