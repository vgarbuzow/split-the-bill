import styles from "./Field.module.scss";
import { type FC, type InputHTMLAttributes } from "react";

type FieldProps = {
  id: string;
  label?: string;
  error?: string | undefined;
} & InputHTMLAttributes<HTMLInputElement>;

const Field: FC<FieldProps> = ({ id, label, error, ...inputProps }) => {
  return (
    <div className={styles.field}>
      <input
        className={`${styles.input} ${error ? styles.inputError : ""}`}
        id={id}
        placeholder=""
        {...inputProps}
      />
      <label className={`${styles.label}`} htmlFor={id}>
        {label}
      </label>
      <span className={styles.error}>{error}</span>
    </div>
  );
};

export default Field;
