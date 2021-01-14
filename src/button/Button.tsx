import React from 'react';
import './button.css';

type BtnType = 'button'  | 'submit' | 'reset' | undefined;
type ButtonProps = {
  btnType: BtnType,
  className: string,
  value: string
}
const Button = ({btnType, className, value}: ButtonProps) => {
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
