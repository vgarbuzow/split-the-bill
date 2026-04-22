import {
  createContext,
  type FC,
  type ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import type { Debt, DebtsApi, DebtsState } from "./types";
import { v4 as uuid } from "uuid";

const DebtsStateContext = createContext<DebtsState | null>(null);
const DebtsApiContext = createContext<DebtsApi | null>(null);

type DebtsProviderProps = {
  children: ReactNode;
};

const DebtsProvider: FC<DebtsProviderProps> = ({ children }) => {
  const [debts, setDebts] = useState<Debt[]>([
    { id: uuid(), name: "Вадим", amount: 100 },
    { id: uuid(), name: "Диана", amount: 200 },
    { id: uuid(), name: "Женя", amount: 300 },
  ]);

  const addDebt = useCallback((newDebt: Debt) => {
    setDebts((debts) => [...debts, newDebt]);
  }, []);

  const removeDebt = useCallback((id: string) => {
    setDebts((debts) => debts.filter((debt) => debt.id !== id));
  }, []);

  const apiValue = useMemo(
    () => ({
      addDebt,
      removeDebt,
    }),
    [addDebt, removeDebt],
  );

  const stateValue = useMemo(
    () => ({
      debts,
    }),
    [debts],
  );

  return (
    <DebtsStateContext.Provider value={stateValue}>
      <DebtsApiContext.Provider value={apiValue}>
        {children}
      </DebtsApiContext.Provider>
    </DebtsStateContext.Provider>
  );
};

export { DebtsProvider, DebtsApiContext, DebtsStateContext };
