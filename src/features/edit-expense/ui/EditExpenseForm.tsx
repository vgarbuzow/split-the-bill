import { type Dispatch, type FC, type SetStateAction } from "react";
import {
  type Expense,
  ExpenseItemForm,
  type ExpenseItemFormValues,
  useExpensesApi,
} from "@/entities/expense";

type ExpenseFormProps = {
  expense: Expense;
  setCurrentEditExpenseId: Dispatch<SetStateAction<string>>;
};

const EditExpenseForm: FC<ExpenseFormProps> = ({
  expense,
  setCurrentEditExpenseId,
}) => {
  const { edit } = useExpensesApi();

  const onSubmit = ({ ownerName, amount }: ExpenseItemFormValues) => {
    if (amount === "") return;
    const editedExpense = {
      id: expense.id,
      ownerName,
      amount,
    };
    edit(editedExpense);
    setCurrentEditExpenseId("");
  };

  return (
    <ExpenseItemForm
      expense={expense}
      onSubmitExpense={onSubmit}
      layout="inline"
    />
  );
};

export default EditExpenseForm;
