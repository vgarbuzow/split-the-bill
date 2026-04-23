import {
  type FC,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import useExpensesLocalStorage from "@/entities/expense/lib/hooks/useExpensesLocalStorage.ts";
import type { Expense } from "./types";
import { ExpensesApiContext } from "./useExpensesApi.ts";
import { ExpensesStateContext } from "./useExpensesState.ts";

type ExpensesProviderProps = {
  children: ReactNode;
};

const ExpensesProvider: FC<ExpensesProviderProps> = ({ children }) => {
  const { savedExpenses, saveExpenses } = useExpensesLocalStorage();
  const [expenses, setExpenses] = useState<Expense[]>(savedExpenses ?? []);

  const add = useCallback((newExpense: Expense) => {
    setExpenses((prevExpenses) => {
      const existedExpense = prevExpenses.find(
        (expense) => expense.ownerName === newExpense.ownerName,
      );

      if (existedExpense)
        throw new Error("Расход для пользователя уже существует");

      return [...prevExpenses, newExpense];
    });
  }, []);

  const deleteById = useCallback((id: string) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id),
    );
  }, []);

  const deleteAll = useCallback(() => setExpenses([]), []);

  const isExistsByName = useCallback(
    (ownerName: string) =>
      expenses.some((expense) => expense.ownerName === ownerName),
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
      deleteById,
      isExistsByName,
      deleteAll,
      getTotalAmount,
    }),
    [add, deleteAll, deleteById, getTotalAmount, isExistsByName],
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
