import type { FC } from "react";
import { useExpensesApi } from "@/entities/expense/model/useExpensesApi.ts";
import type { Expense } from "@/entities/expense/model/types.ts";
import { Button } from "@/shared/ui";
import { CloseIcon } from "@/shared/icons";
import styles from "./ExpenseItem.module.scss";

type ExpenseItemProps = {
  expense: Expense;
};

const ExpenseItem: FC<ExpenseItemProps> = ({ expense }) => {
  const { deleteById } = useExpensesApi();

  return (
    <>
      <span className={`${styles.item}`}>{expense.ownerName}</span>
      <span className={`${styles.item}`}>{expense.amount} ₽</span>
      <span className={`${styles.deleteButtonContainer}`}>
        <Button variant="icon" onClick={() => deleteById(expense.id)}>
          <CloseIcon />
        </Button>
      </span>
    </>
  );
};

export default ExpenseItem;
