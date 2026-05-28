import { useExpensesApi, useExpensesState } from "@/entities/expense";
import styles from "./ExpensesInfo.module.scss";

const ExpensesInfo = () => {
  const { expenses } = useExpensesState();
  const { getTotalAmount } = useExpensesApi();

  return (
    <div className={styles.expensesInfo}>
      <span>Всего расходов: {expenses.length}</span>
      <span>Общая сумма: {getTotalAmount()} ₽</span>
    </div>
  );
};

export default ExpensesInfo;
