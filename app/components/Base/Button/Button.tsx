import React from 'react'
import styles from './Button.module.css';

interface ButtonType {
  children: React.ReactNode,
  name: string,
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, name, onClick }: ButtonType) => {
  return (
    <button
      data-testid={name}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button