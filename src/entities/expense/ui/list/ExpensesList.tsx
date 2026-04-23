import styles from "./ExpensesList.module.scss";
import ExpenseItem from "@/entities/expense/ui/item";
import { useExpensesApi, useExpensesState } from "@/entities/expense/model";
import { Fragment } from "react";
import BasketIcon from "@/shared/icons/basket/BasketIcon.tsx";
import Button from "@/shared/ui/button";

const ExpensesList = () => {
  const { expenses } = useExpensesState();
  const { deleteAll } = useExpensesApi();
  const hasExpenses = expenses?.length > 0;

  if (!hasExpenses) {
    return (
      <div className={styles.emptyMessage}>
        Данные отсутствуют, добавьте статью расходов
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      <span className={styles.gridHeader}>Имя</span>
      <span className={styles.gridHeader}>Сумма</span>
      <span className={styles.deleteAllButtonContainer}>
        <Button variant="icon" onClick={deleteAll}>
          <BasketIcon />
        </Button>
      </span>

      {expenses.map((expense) => (
        <Fragment key={expense.id}>
          <hr className={styles.divider} />
          <ExpenseItem expense={expense} />
        </Fragment>
      ))}
    </div>
  );
};

export default ExpensesList;
