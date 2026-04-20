import styles from "./Field.module.scss";
import type { FC, ReactNode } from "react";

type FieldProps = {
  id: string;
  children?: ReactNode;
};

const Field: FC<FieldProps> = ({ id, children }) => {
  return (
    <div className={styles.field}>
      <input className={styles.input} id={id} placeholder="" />
      <label className={`${styles.label}`} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export default Field;
