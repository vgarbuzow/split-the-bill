import styles from "./ExpensesInfo.module.scss";
import { useExpensesState } from "@/entities/expense/model";

const ExpensesInfo = () => {
  const { expenses } = useExpensesState();

  const sum = expenses.reduce((acc, expense) => {
    return acc + expense.amount;
  }, 0);

  return (
    <div className={styles.expensesInfo}>
      <span>Всего расходов: {expenses.length}</span>
      <span>Общая сумма: {sum}</span>
    </div>
  );
};

export default ExpensesInfo;
