import Button from "@/shared/ui/button";
import CloseIcon from "@/shared/icons/close";
import styles from "./ExpenseItem.module.scss";
import { type Expense, useExpensesApi } from "@/entities/expense/model";
import type { FC } from "react";

type ExpenseItemProps = {
  expense: Expense;
};

const ExpenseItem: FC<ExpenseItemProps> = ({ expense }) => {
  const { deleteById } = useExpensesApi();

  return (
    <>
      <span className={`${styles.item}`}>{expense.ownerName}</span>
      <span className={`${styles.item}`}>{expense.amount}</span>
      <span className={`${styles.deleteButtonContainer}`}>
        <Button variant="icon" onClick={() => deleteById(expense.id)}>
          <CloseIcon />
        </Button>
      </span>
    </>
  );
};

export default ExpenseItem;
