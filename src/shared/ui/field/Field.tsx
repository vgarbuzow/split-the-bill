import styles from "./Field.module.scss";
import { type FC, type InputHTMLAttributes } from "react";

type FieldProps = {
  id: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Field: FC<FieldProps> = ({ id, label, ...inputProps }) => {
  return (
    <div className={styles.field}>
      <input className={styles.input} id={id} placeholder="" {...inputProps} />
      <label className={`${styles.label}`} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Field;
