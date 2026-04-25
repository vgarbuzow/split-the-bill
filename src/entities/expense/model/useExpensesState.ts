import { createContext, useContext } from "react";
import type { Expense } from "./types.ts";

export type ExpensesState = {
  expenses: Expense[];
};

export const ExpensesStateContext = createContext<ExpensesState | null>(null);

export const useExpensesState = (): ExpensesState => {
  const context = useContext(ExpensesStateContext);
  if (!context) {
    throw new Error("useExpensesState must be used within ExpensesProvider");
  }
  return context;
};
