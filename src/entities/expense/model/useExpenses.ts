import { useContext } from "react";
import type { ExpensesApi, ExpensesState } from "./types";
import {
  ExpensesApiContext,
  ExpensesStateContext,
} from "./ExpensesProvider.tsx";

export const useExpensesState = (): ExpensesState => {
  const context = useContext(ExpensesStateContext);
  if (!context) {
    throw new Error("useExpensesState must be used within ExpensesProvider");
  }
  return context;
};

export const useExpensesApi = (): ExpensesApi => {
  const context = useContext(ExpensesApiContext);
  if (!context) {
    throw new Error("useExpensesApi must be used within ExpensesProvider");
  }
  return context;
};
