import styles from "./AddExpenseForm.module.scss";
import Field from "@/shared/ui/field";
import Button from "@/shared/ui/button";
import { useExpensesApi } from "@/entities/expense/model";
import { v4 as uuid } from "uuid";
import { type FieldValues, type SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";

type FormValues = {
  ownerName: string;
  amount: number;
};

const AddExpenseForm = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur" });
  const { addExpense } = useExpensesApi();

  const onSubmit: SubmitHandler<FieldValues> = ({ ownerName, amount }) => {
    const newExpense = {
      id: uuid(),
      ownerName,
      amount,
    };
    addExpense(newExpense);
  };

  useEffect(() => {
    setFocus("ownerName");
  }, [setFocus]);

  return (
    <form className={styles.newExpenseForm} onSubmit={handleSubmit(onSubmit)}>
      <Field
        id="ownerName"
        label="Имя"
        autoComplete="off"
        error={errors?.ownerName?.message}
        {...register("ownerName", {
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
        error={errors?.amount?.message}
        {...register("amount", {
          required: "Сумма обязательна",
          min: {
            value: 1,
            message: "Минимум 1",
          },
          valueAsNumber: true,
        })}
      />
      <Button className={styles.addExpenseButton} type="submit">
        Добавить
      </Button>
    </form>
  );
};

export default AddExpenseForm;
