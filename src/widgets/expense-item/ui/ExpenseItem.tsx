import type { Dispatch, FC, SetStateAction } from "react";
import { useExpensesApi } from "@/entities/expense/model/useExpensesApi.ts";
import type { Expense } from "@/entities/expense/model/types.ts";
import { Button } from "@/shared/ui";
import { CloseIcon } from "@/shared/icons";
import styles from "./ExpenseItem.module.scss";
import EditIcon from "@/shared/icons/edit/EditIcon.tsx";

type ExpenseItemProps = {
  expense: Expense;
  setCurrentEditExpenseId: Dispatch<SetStateAction<string>>;
};

const ExpenseItem: FC<ExpenseItemProps> = ({
  expense,
  setCurrentEditExpenseId,
}) => {
  const { deleteById } = useExpensesApi();

  return (
    <>
      <span className={`${styles.item}`}>{expense.ownerName}</span>
      <span className={`${styles.item}`}>{expense.amount} ₽</span>
      <span className={`${styles.deleteButtonContainer}`}>
        <Button
          variant="icon"
          onClick={() => setCurrentEditExpenseId(expense.id)}
        >
          <EditIcon />
        </Button>
        <Button variant="icon" onClick={() => deleteById(expense.id)}>
          <CloseIcon />
        </Button>
      </span>
    </>
  );
};

export default ExpenseItem;
