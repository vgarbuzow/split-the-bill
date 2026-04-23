import { useExpensesApi } from "@/entities/expense";
import { v4 as uuid } from "uuid";
import { type SubmitHandler, useForm } from "react-hook-form";
import { type ChangeEvent, useEffect } from "react";
import { Button, Field } from "@/shared/ui";
import styles from "./AddExpenseForm.module.scss";

type FormValues = {
  ownerName: string;
  amount: number | "";
};

const AddExpenseForm = () => {
  const {
    register,
    handleSubmit,
    setFocus,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onBlur", reValidateMode: "onBlur" });
  const { add, isExistsByName } = useExpensesApi();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filtered = e.target.value.replace(/[^A-Za-zА-Яа-яЁё\s-]/g, "");
    setValue("ownerName", filtered, { shouldValidate: true });
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filtered = e.target.value.replace(/\D/g, "");
    setValue("amount", Number.parseInt(filtered), { shouldValidate: true });
  };

  const onSubmit: SubmitHandler<FormValues> = ({ ownerName, amount }) => {
    if (amount === "") return;

    const newExpense = {
      id: uuid(),
      ownerName: ownerName.trim(),
      amount,
    };

    add(newExpense);
    reset({
      ownerName: "",
      amount: "",
    });

    setTimeout(() => {
      setFocus("ownerName");
    }, 0);
  };

  useEffect(() => {
    setFocus("ownerName");
  }, []);

  return (
    <form className={styles.newExpenseForm} onSubmit={handleSubmit(onSubmit)}>
      <Field
        id="ownerName"
        label="Имя"
        autoComplete="off"
        error={errors?.ownerName?.message}
        {...register("ownerName", {
          required: "Имя обязательно",
          validate: {
            checkExists: (ownerName) => {
              if (isExistsByName(ownerName))
                return `Расход для пользователя '${ownerName}' уже существует`;
            },
            minLength: (ownerName) => {
              const trimValue = ownerName.trim();
              if (trimValue.length < 2)
                return `Имя должно содержать более 1 символа`;
            },
          },
        })}
        onChange={handleNameChange}
      />

      <Field
        id="amount"
        label="Сумма ₽"
        type="number"
        autoComplete="off"
        error={errors?.amount?.message}
        {...register("amount", {
          required: "Сумма обязательна",
          min: {
            value: 0,
            message: "Минимум 0",
          },
          valueAsNumber: true,
        })}
        onChange={handleAmountChange}
      />
      <Button className={styles.addExpenseButton} type="submit">
        Добавить
      </Button>
    </form>
  );
};

export default AddExpenseForm;
