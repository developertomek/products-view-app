import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className={styles.button} onClick={onClick} data-cy="button">
      {children}
    </button>
  );
};

export default Button;
