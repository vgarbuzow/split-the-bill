import styles from "./ExpensesPage.module.scss";
import AddExpenseForm from "@/features/expense/add";
import ExpensesList from "@/entities/expense/ui/list";
import ExpensesInfo from "@/features/expense/info";
import ExpensesCalculator from "@/features/expense/calculator";
import { useExpensesState } from "@/entities/expense/model";
import Divider from "@/shared/ui/divider";

const ExpensesPage = () => {
  const { expenses } = useExpensesState();
  const hasExpenses = expenses.length > 0;

  return (
    <div className={styles.expenses}>
      <h1 className={styles.title}>Поделим поровну</h1>
      <AddExpenseForm />
      <Divider />
      <ExpensesList />
      {hasExpenses && (
        <>
          <Divider />
          <ExpensesInfo />
          <Divider />
          <ExpensesCalculator />
        </>
      )}
    </div>
  );
};

export default ExpensesPage;
