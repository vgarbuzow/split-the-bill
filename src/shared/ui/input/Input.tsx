import { type FC, type InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

type InputProps = {
  id: string;
  error?: string | undefined;
  size?: "sm" | "lg";
  fullWidth?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

const Input: FC<InputProps> = ({
  id,
  error,
  size = "sm",
  fullWidth,
  ...inputProps
}) => {
  const fullWidthClass = fullWidth ? styles.fullWidth : "";
  return (
    <div className={fullWidthClass}>
      <input
        className={`${styles.input} ${styles[size]} ${error ? styles.inputError : ""} ${fullWidthClass}`}
        id={id}
        {...inputProps}
      />
      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
};

export default Input;
