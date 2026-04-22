import styles from "./Field.module.scss";
import { type ChangeEvent, type FC } from "react";

type FieldProps = {
  id: string;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

const Field: FC<FieldProps> = ({ id, label, onChange, value }) => {
  return (
    <div className={styles.field}>
      <input
        className={styles.input}
        id={id}
        placeholder=""
        onChange={onChange}
        value={value}
      />
      <label className={`${styles.label}`} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Field;
