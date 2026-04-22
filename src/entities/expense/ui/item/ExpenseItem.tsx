import Button from "@/shared/ui/button";
import CloseIcon from "@/shared/icons/close-icon";
import style from "./ExpenseItem.module.scss";
import { type Expense, useExpensesApi } from "@/entities/expense/model";
import type { FC } from "react";

type ExpenseItemProps = {
  expense: Expense;
};

const ExpenseItem: FC<ExpenseItemProps> = ({ expense }) => {
  const { removeExpense } = useExpensesApi();
  return (
    <>
      <span className={style.item}>{expense.ownerName}</span>
      <span className={style.item}>{expense.amount}</span>
      <span className={style.deleteButtonContainer}>
        <Button
          variant="icon"
          className={style.deleteButton}
          onClick={() => removeExpense(expense.id)}
        >
          <CloseIcon />
        </Button>
      </span>
    </>
  );
};

export default ExpenseItem;
