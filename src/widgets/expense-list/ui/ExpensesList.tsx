import { Fragment, useState } from "react";
import { useExpensesApi, useExpensesState } from "@/entities/expense";
import { Button } from "@/shared/ui";
import { BasketIcon } from "@/shared/icons";
import styles from "./ExpensesList.module.scss";
import ExpenseItem from "@/widgets/expense-item";
import ExpenseItemForm from "@/shared/ui/expense-item-form/ExpenseItemForm.tsx";

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
            <ExpenseItemForm expense={expense} />
          ) : (
            <ExpenseItem
              expense={expense}
              setCurrentEditExpenseId={setCurrentEditExpenseId}
            />
          )}
        </Fragment>
      ))}
      <hr className={styles.divider} />
      {!currentEditExpenseId && <ExpenseItemForm />}
    </div>
  );
};

export default ExpensesList;
