import {
  type FC,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import useExpensesLocalStorage from "@/entities/expense/model/hooks/useExpensesLocalStorage.ts";
import type { Expense } from "@/entities/expense/model/types.ts";
import ExpensesStateContext from "./contexts/ExpensesStateContext";
import ExpensesApiContext from "./contexts/ExpensesApiContext";

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

  const apiValue = {
    add,
    deleteById,
    isExistsByName,
    deleteAll,
  };

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
    <ExpensesStateContext.Provider value={stateValue}>
      <ExpensesApiContext.Provider value={apiValue}>
        {children}
      </ExpensesApiContext.Provider>
    </ExpensesStateContext.Provider>
  );
};

export default ExpensesProvider;
