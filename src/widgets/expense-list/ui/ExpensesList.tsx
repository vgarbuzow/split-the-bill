import { Fragment, useState } from "react";
//TODO: Унести в действия deleteAll
import { useExpensesApi, useExpensesState } from "@/entities/expense";
import { Button } from "@/shared/ui";
import { BasketIcon } from "@/shared/icons";
import styles from "./ExpensesList.module.scss";
import ExpenseItem from "@/widgets/expense-item";
import AddExpenseForm from "@/features/add-expense";
import EditExpenseForm from "@/features/edit-expense";

const ExpensesList = () => {
  const { expenses } = useExpensesState();
  const { deleteAll } = useExpensesApi();
  const [currentEditExpenseId, setCurrentEditExpenseId] = useState("");

  return (
    <div className={styles.grid}>
      <div className={styles.header}>
        <span>Имя</span>
        <span>Сумма</span>
        <span className={styles.deleteAllButtonContainer}>
          <Button variant="icon" onClick={deleteAll}>
            <BasketIcon />
          </Button>
        </span>
      </div>

      {expenses.map((expense) => (
        <Fragment key={expense.id}>
          <hr className={styles.divider} />
          {currentEditExpenseId === expense.id ? (
            <EditExpenseForm
              expense={expense}
              setCurrentEditExpenseId={setCurrentEditExpenseId}
            />
          ) : (
            <ExpenseItem
              expense={expense}
              setCurrentEditExpenseId={setCurrentEditExpenseId}
            />
          )}
        </Fragment>
      ))}

      {!currentEditExpenseId && (
        <>
          <hr className={styles.divider} />
          <AddExpenseForm />
        </>
      )}
    </div>
  );
};

export default ExpensesList;
