import {
  createContext,
  type FC,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Expense, ExpensesApi, ExpensesState } from "./types";
import useExpensesLocalStorage from "@/entities/expense/model/useExpensesLocalStorage.ts";

const ExpensesStateContext = createContext<ExpensesState | null>(null);
const ExpensesApiContext = createContext<ExpensesApi | null>(null);

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

  const remove = useCallback((id: string) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id),
    );
  }, []);

  const isExistsByName = useCallback(
    (ownerName: string) => {
      return expenses.some((expense) => expense.ownerName === ownerName);
    },
    [expenses],
  );

  const apiValue = {
    add,
    remove,
    isExistsByName,
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

export { ExpensesProvider, ExpensesApiContext, ExpensesStateContext };
