import AddExpenseForm from "@/features/add-expense";
import ExpensesInfo from "@/widgets/expense-info";
import DebtsCalculator from "@/features/calculate-debts";
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
