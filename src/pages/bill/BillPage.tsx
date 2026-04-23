import AddExpenseForm from "@/features/expense/add";
import ExpensesInfo from "@/features/expense/info";
import DebtsCalculator from "@/features/debt/calculator";
import { ExpensesList, useExpensesState } from "@/entities/expense";
import { Divider } from "@/shared/ui";
import styles from "./BillPage.module.scss";

const BillPage = () => {
  const { expenses } = useExpensesState();
  const hasExpenses = expenses?.length > 0;

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
          <DebtsCalculator />
        </>
      )}
    </div>
  );
};

export default BillPage;
