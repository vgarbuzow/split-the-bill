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

  const addExpense = useCallback((newExpense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  }, []);

  const removeExpense = useCallback((id: string) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id),
    );
  }, []);

  const apiValue = {
    addExpense,
    removeExpense,
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
