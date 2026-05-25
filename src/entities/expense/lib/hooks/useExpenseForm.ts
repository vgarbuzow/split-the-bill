import { type ChangeEvent, useEffect } from "react";
import { useForm } from "react-hook-form";
import { type Expense, useExpensesApi } from "@/entities/expense";

export type ExpenseItemFormValues = {
  ownerName: string;
  amount: number | "";
};

export type UseExpenseItemFormParams = {
  expense?: Expense;
  onSubmitExpense: (data: ExpenseItemFormValues) => void;
  resetAfterSubmit?: boolean;
};

export const useExpenseItemForm = ({
  expense,
  onSubmitExpense,
  resetAfterSubmit,
}: UseExpenseItemFormParams) => {
  const { isExistsByName } = useExpensesApi();

  const form = useForm<ExpenseItemFormValues>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      ownerName: expense?.ownerName ?? "",
      amount: expense?.amount ?? "",
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    setFocus,
    setValue,
    formState: { errors },
  } = form;

  const ownerNameField = register("ownerName", {
    required: "Имя обязательно",
    validate: {
      checkExists: (ownerName) => {
        if (isExistsByName(ownerName, expense?.id)) {
          return `Расход для пользователя '${ownerName}' уже существует`;
        }
      },
      minLength: (ownerName) => {
        if (ownerName.trim().length < 2) {
          return "Имя должно содержать более 1 символа";
        }
      },
    },
  });

  const amountField = register("amount", {
    required: "Сумма обязательна",
    min: {
      value: 0,
      message: "Минимум 0",
    },
    valueAsNumber: true,
  });

  const onSubmit = handleSubmit((data) => {
    onSubmitExpense(data);

    if (resetAfterSubmit) {
      reset({
        ownerName: "",
        amount: "",
      });
    }

    queueMicrotask(() => setFocus("ownerName"));
  });

  useEffect(() => {
    setFocus("ownerName");
  }, [setFocus]);

  const handleOwnerNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filtered = e.target.value.replace(/[^A-Za-zА-Яа-яЁё\s-]/g, "");
    setValue("ownerName", filtered);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const filtered = e.target.value.replace(/\D/g, "");
    setValue("amount", filtered ? Number.parseInt(filtered) : "");
  };

  return {
    errors,
    onSubmit,

    ownerNameProps: {
      ...ownerNameField,
      id: "ownerName",
      autoComplete: "off",
      placeholder: "Имя",
      error: errors.ownerName?.message,
      onChange: handleOwnerNameChange,
    },

    amountProps: {
      ...amountField,
      id: "amount",
      type: "number",
      autoComplete: "off",
      placeholder: "Сумма",
      error: errors.amount?.message,
      onChange: handleAmountChange,
    },
  };
};
