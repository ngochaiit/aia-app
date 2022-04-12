import React, { FC } from 'react';
import cx from 'classnames';
import './Card.scss'

const Card: FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { children, className, ...other } = props;

  return (
    <div className={cx('app-card', className)} {...other}>
      {children}
    </div>
  );
};

export default Card;
