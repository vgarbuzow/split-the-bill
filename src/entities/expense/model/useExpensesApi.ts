import type { Expense } from "./types.ts";
import { createContext, useContext } from "react";

export type ExpensesApi = {
  add: (expense: Expense) => void;
  edit: (expense: Expense) => void;
  deleteById: (id: string) => void;
  isExistsByName: (ownerName: string, id?: string) => boolean;
  deleteAll: () => void;
  getTotalAmount: () => number;
};

export const ExpensesApiContext = createContext<ExpensesApi | null>(null);

export const useExpensesApi = (): ExpensesApi => {
  const context = useContext(ExpensesApiContext);
  if (!context) {
    throw new Error("useExpensesApi must be used within ExpensesProvider");
  }
  return context;
};
