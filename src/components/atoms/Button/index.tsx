import { FC } from 'react';
import cx from 'classnames';

import './Button.scss';

export type ButtonProps = {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLButtonElement>


const Button:FC<ButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  className,
  label,
  children,
  ...props
})=> {
    
  const mode = primary ? 'primary' : 'secondary';
  return (
    <button
      type="button"
      className={cx(['button', `${size}`, mode].join(' '), className)}
      style={{ backgroundColor }}
      {...props}
    >
      {label ? label : children}
    </button>
  );
};

export default Button
