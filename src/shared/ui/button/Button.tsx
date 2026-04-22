import styles from "./Button.module.scss";
import type { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "icon";
  className?: string;
  onClick?: () => void;
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  onClick,
}) => {
  return (
    <button
      className={`${className} ${styles[variant]}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
