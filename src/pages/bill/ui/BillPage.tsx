import ExpensesInfo from "@/widgets/expense-info";
import DebtsCalculator from "@/features/calculate-debts";
import { useExpensesState } from "@/entities/expense";
import { Divider } from "@/shared/ui";
import ExpensesList from "@/widgets/expense-list";
import styles from "./BillPage.module.scss";
import AddExpenseForm from "@/features/add-expense";

const BillPage = () => {
  const { expenses } = useExpensesState();
  const hasExpenses = expenses?.length > 0;

  return (
    <div className={styles.expenses}>
      <h1 className={styles.title}>Поделим поровну</h1>

      {hasExpenses ? (
        <>
          <ExpensesList />
          <Divider />
          <ExpensesInfo />
          <Divider />
          <DebtsCalculator />
        </>
      ) : (
        <div className={styles.addExpenseContainer}>
          <span className={styles.addExpenseHint}>
            Добавьте расход для начала расчета
          </span>
          <AddExpenseForm layout="vertical" />
        </div>
      )}
    </div>
  );
};

export default BillPage;
