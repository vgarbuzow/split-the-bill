import { type FC, type InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

type InputProps = {
  id: string;
  error?: string | undefined;
  size?: "sm" | "lg";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;

const Input: FC<InputProps> = ({ id, error, size = "sm", ...inputProps }) => {
  return (
    <div>
      <input
        className={`${styles.input} ${styles[size]} ${error ? styles.inputError : ""}`}
        id={id}
        {...inputProps}
      />
      {error ? <div className={styles.error}>{error}</div> : null}
    </div>
  );
};

export default Input;
