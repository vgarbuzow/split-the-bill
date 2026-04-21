import styles from "./AddDebtForm.module.scss";
import Field from "@/shared/ui/field";
import Button from "@/shared/ui/button";

const AddDebtForm = () => {
  return (
    <form className={styles.newDebt}>
      <Field id="name">Имя</Field>
      <Field id="amount">Сумма</Field>
      <Button className={styles.addDebtButton}>Добавить</Button>
    </form>
  );
};

export default AddDebtForm;
