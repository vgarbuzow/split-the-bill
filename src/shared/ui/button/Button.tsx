import type { FC, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "icon";
  onClick?: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  size?: "md" | "lg";
};

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  size = "md",
  fullWidth,
}) => {
  return (
    <button
      className={`${styles[variant]} ${fullWidth ? styles.fullWidth : ""} ${styles[size]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
