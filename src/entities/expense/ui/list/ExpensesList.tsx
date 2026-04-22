import styles from "./ExpensesList.module.scss";
import ExpenseItem from "@/entities/expense/ui/item";
import { useExpensesState } from "@/entities/expense/model";
import { Fragment } from "react";

const ExpensesList = () => {
  const { expenses } = useExpensesState();
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
      <div className={styles.gridHeader}>Имя</div>
      <div className={styles.gridHeader}>Сумма</div>
      <div></div>

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
