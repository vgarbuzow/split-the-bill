import {
  type FC,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import useExpensesLocalStorage from "../lib/hooks/useExpensesLocalStorage.ts";
import type { Expense } from "./types";
import { ExpensesApiContext } from "./useExpensesApi.ts";
import { ExpensesStateContext } from "./useExpensesState.ts";

type ExpensesProviderProps = {
  children: ReactNode;
};

const ExpensesProvider: FC<ExpensesProviderProps> = ({ children }) => {
  const { savedExpenses, saveExpenses } = useExpensesLocalStorage();
  const [expenses, setExpenses] = useState<Expense[]>(savedExpenses ?? []);

  const validate = (expense: Expense, expenses: Expense[]) => {
    if (!expense.ownerName.trim())
      throw new Error("Не заполнено поле 'ownerName'");

    if (expense.amount < 0)
      throw new Error("Сумма должна быть больше или равна 0");

    const existedExpense = expenses.find(
      (expense) =>
        expense.ownerName === expense.ownerName && expense.id !== expense.id,
    );

    if (existedExpense)
      throw new Error("Расход для пользователя уже существует");
  };

  const add = useCallback((newExpense: Expense) => {
    setExpenses((prevExpenses) => {
      validate(newExpense, prevExpenses);

      return [...prevExpenses, newExpense];
    });
  }, []);

  const edit = useCallback((updatedExpense: Expense) => {
    setExpenses((prevExpenses) => {
      validate(updatedExpense, prevExpenses);

      const expenseExists = prevExpenses.some(
        (expense) => expense.id === updatedExpense.id,
      );

      if (!expenseExists) throw new Error("Расход не найден");

      return prevExpenses.map((expense) =>
        expense.id === updatedExpense.id ? updatedExpense : expense,
      );
    });
  }, []);

  const deleteById = useCallback((id: string) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id),
    );
  }, []);

  const deleteAll = useCallback(() => setExpenses([]), []);

  const isExistsByName = useCallback(
    (ownerName: string, id?: string) =>
      expenses.some(
        (expense) => expense.id !== id && expense.ownerName === ownerName,
      ),
    [expenses],
  );

  const getTotalAmount = useCallback(
    () =>
      expenses.reduce((acc, expense) => {
        return acc + expense.amount;
      }, 0),
    [expenses],
  );

  const apiValue = useMemo(
    () => ({
      add,
      edit,
      deleteById,
      isExistsByName,
      deleteAll,
      getTotalAmount,
    }),
    [add, edit, deleteAll, deleteById, getTotalAmount, isExistsByName],
  );

  const stateValue = useMemo(
    () => ({
      expenses,
    }),
    [expenses],
  );

  useEffect(() => {
    saveExpenses(expenses);
  }, [expenses]);

  return (
    <ExpensesApiContext.Provider value={apiValue}>
      <ExpensesStateContext.Provider value={stateValue}>
        {children}
      </ExpensesStateContext.Provider>
    </ExpensesApiContext.Provider>
  );
};

export default ExpensesProvider;
