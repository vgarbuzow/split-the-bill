import styles from "./Button.module.scss";
import type { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "icon";
  className?: string;
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
}) => {
  return (
    <button className={`${className} ${styles[variant]}`} type="button">
      {children}
    </button>
  );
};

export default Button;
