import { type FC, type InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";

type InputProps = {
  id: string;
  error?: string | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ id, error, ...inputProps }) => {
  return (
    <div>
      <input
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        id={id}
        {...inputProps}
      />
      <span className={styles.error}>{error}</span>
    </div>
  );
};

export default Input;
