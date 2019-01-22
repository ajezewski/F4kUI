import React from 'react';
import './button.css';

const Button = ({btnType, className, value} = {btnType: '', className: '', value: ''}) => {
  return (
    <button
      type={btnType}
      className={className}
    >
      <span>{value}</span>
    </button>
  )
};

export default Button;
