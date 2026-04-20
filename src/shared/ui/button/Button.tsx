import styles from "./Button.module.scss";
import type { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "icon";
};

const Button: FC<ButtonProps> = ({ children, variant = "primary" }) => {
  return (
    <button className={`${styles[variant]}`} type="button">
      {children}
    </button>
  );
};

export default Button;
