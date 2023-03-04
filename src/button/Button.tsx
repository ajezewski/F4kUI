import React from 'react';
import './button.scss';

type BtnType = 'button'  | 'submit' | 'reset' | undefined;
type ButtonProps = {
  btnType: BtnType,
  className: string,
  value?: string,
  click?: any,
  children?: any
}
const Button = ({btnType, className, value, click, children}: ButtonProps): JSX.Element => {
  return (
    <button
      type={btnType}
      className={className}
      onClick={click}
    >
      { value && <span>{value}</span> }
      { children }
    </button>
  )
};

export default Button;
