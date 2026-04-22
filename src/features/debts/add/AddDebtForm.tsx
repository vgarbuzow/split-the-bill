import styles from "./AddDebtForm.module.scss";
import Field from "@/shared/ui/field";
import Button from "@/shared/ui/button";
import { useDebtsApi } from "@/entities/debt/model";
import {
  type ChangeEvent,
  type SubmitEvent,
  useCallback,
  useState,
} from "react";
import { v4 as uuid } from "uuid";

const AddDebtForm = () => {
  const { addDebt } = useDebtsApi();

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = useCallback(
    (event: SubmitEvent<HTMLFormElement>) => {
      event.preventDefault();
      const newDebt = { id: uuid(), name, amount: Number.parseInt(amount) };
      addDebt(newDebt);
      setName("");
      setAmount("");
    },
    [addDebt, amount, name],
  );

  const handleNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    [],
  );

  const handleAmountChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAmount(event.target.value);
    },
    [],
  );

  return (
    <form className={styles.newDebt} onSubmit={handleSubmit}>
      <Field id="name" label="Имя" onChange={handleNameChange} value={name} />
      <Field
        id="amount"
        label="Сумма"
        onChange={handleAmountChange}
        value={amount}
      />
      <Button className={styles.addDebtButton} type="submit">
        Добавить
      </Button>
    </form>
  );
};

export default AddDebtForm;
