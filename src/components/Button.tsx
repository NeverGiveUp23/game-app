import React from 'react'

interface Props {
  children: string;
  color?: 'primary' | 'warning' | 'danger';
  onClick: () => void;
}

const Button = ({ children, onClick, color = 'danger' }: Props) => {
  return (
    <>
      <button className={'btn btn-' + color + ' m-8'} onClick={onClick}>{children}</button>
    </>
  );
};

export default Button