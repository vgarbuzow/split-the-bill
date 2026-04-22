import {
  createContext,
  type FC,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import type { Expense, ExpensesApi, ExpensesState } from "./types";
import { v4 as uuid } from "uuid";

const ExpensesStateContext = createContext<ExpensesState | null>(null);
const ExpensesApiContext = createContext<ExpensesApi | null>(null);

type ExpensesProviderProps = {
  children: ReactNode;
};

const ExpensesProvider: FC<ExpensesProviderProps> = ({ children }) => {
  const [expenses, setExpenses] = useState<Expense[]>(() => [
    { id: uuid(), ownerName: "Вадим", amount: 100 },
    { id: uuid(), ownerName: "Диана", amount: 200 },
    { id: uuid(), ownerName: "Женя", amount: 300 },
  ]);

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

  return (
    <ExpensesStateContext.Provider value={stateValue}>
      <ExpensesApiContext.Provider value={apiValue}>
        {children}
      </ExpensesApiContext.Provider>
    </ExpensesStateContext.Provider>
  );
};

export { ExpensesProvider, ExpensesApiContext, ExpensesStateContext };
