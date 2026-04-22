import styles from "./Button.module.scss";
import type { FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "icon";
  className?: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
};

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  variant = "primary",
  type = "button",
}) => {
  return (
    <button
      className={`${className} ${styles[variant]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
