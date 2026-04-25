import { type Expense, useExpensesApi } from "@/entities/expense";
import { useForm } from "react-hook-form";
import { type ChangeEvent, type FC, useEffect } from "react";
import { Button, Input } from "@/shared/ui";
import styles from "./ExpenseItemForm.module.scss";
import { ConfirmIcon } from "@/shared/icons";

type ExpenseItemFormProps = {
  expense?: Expense;
  onSubmitExpense: (data: ExpenseItemFormValues) => void;
  resetAfterSubmit?: boolean;
};

export type ExpenseItemFormValues = {
  ownerName: string;
  amount: number | "";
};

const ExpenseItemForm: FC<ExpenseItemFormProps> = ({
  expense,
  onSubmitExpense,
  resetAfterSubmit,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    setValue,
    formState: { errors },
  } = useForm<ExpenseItemFormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      ownerName: expense?.ownerName,
      amount: expense?.amount,
    },
  });

  const { isExistsByName } = useExpensesApi();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filtered = e.target.value.replace(/[^A-Za-zА-Яа-яЁё\s-]/g, "");
    setValue("ownerName", filtered, { shouldValidate: true });
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filtered = e.target.value.replace(/\D/g, "");
    setValue("amount", Number.parseInt(filtered), { shouldValidate: true });
  };

  const onSubmit = (data: ExpenseItemFormValues) => {
    onSubmitExpense(data);
    if (resetAfterSubmit) reset({ ownerName: "", amount: "" });
    queueMicrotask(() => setFocus("ownerName"));
  };

  useEffect(() => {
    setFocus("ownerName");
  }, [setFocus]);

  return (
    <form className={styles.newExpenseForm} onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="ownerName"
        autoComplete="off"
        placeholder="Имя"
        error={errors?.ownerName?.message}
        {...register("ownerName", {
          required: "Имя обязательно",
          validate: {
            checkExists: (ownerName) => {
              if (isExistsByName(ownerName, expense?.id))
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

      <Input
        id="amount"
        type="number"
        autoComplete="off"
        placeholder="Сумма"
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
      <Button type="submit" className={styles.addExpenseButton} variant="icon">
        <ConfirmIcon />
      </Button>
    </form>
  );
};

export default ExpenseItemForm;
