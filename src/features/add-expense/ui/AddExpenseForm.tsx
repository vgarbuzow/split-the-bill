import ExpenseItemForm, { useExpensesApi } from "@/entities/expense";
import { v4 as uuid } from "uuid";
import { type ExpenseItemFormValues } from "@/entities/expense";

const AddExpenseForm = () => {
  const { add } = useExpensesApi();

  const onSubmit = ({ ownerName, amount }: ExpenseItemFormValues) => {
    if (amount === "") return;

    const newExpense = {
      id: uuid(),
      ownerName: ownerName.trim(),
      amount,
    };

    add(newExpense);
  };

  return <ExpenseItemForm onSubmitExpense={onSubmit} resetAfterSubmit />;
};

export default AddExpenseForm;
