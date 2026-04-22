import styles from "./AddExpenseForm.module.scss";
import Field from "@/shared/ui/field";
import Button from "@/shared/ui/button";
import { type Expense, useExpensesApi } from "@/entities/expense/model";
import { v4 as uuid } from "uuid";
import { type FieldValues, type SubmitHandler, useForm } from "react-hook-form";

const AddExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { addExpense } = useExpensesApi();

  const onSubmit: SubmitHandler<FieldValues> = ({ ownerName, amount }) => {
    const newExpense = {
      id: uuid(),
      ownerName,
      amount,
    };
    addExpense(newExpense);
  };

  return (
    <form className={styles.newExpenseForm} onSubmit={handleSubmit(onSubmit)}>
      <Field
        id="name"
        label="Имя"
        autoComplete="off"
        {...register("name", {
          required: "Имя обязательно",
          minLength: {
            value: 2,
            message: "Минимум 2 символа",
          },
        })}
      />

      <Field
        id="amount"
        label="Сумма"
        type="number"
        autoComplete="off"
        {...register("amount", {
          required: "Сумма обязательна",
          min: {
            value: 1,
            message: "Минимум 1",
          },
          valueAsNumber: true, // Важно для числовых полей
        })}
      />
      <Button className={styles.addExpenseButton} type="submit">
        Добавить
      </Button>
    </form>
  );
};

export default AddExpenseForm;
