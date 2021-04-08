import React from 'react';
import './button.css';

type BtnType = 'button'  | 'submit' | 'reset' | undefined;
type ButtonProps = {
  btnType: BtnType,
  className: string,
  value: string,
  click?: any
}
const Button = ({btnType, className, value, click}: ButtonProps): JSX.Element => {
  return (
    <button
      type={btnType}
      className={className}
      onClick={click}
    >
      <span>{value}</span>
    </button>
  )
};

export default Button;
