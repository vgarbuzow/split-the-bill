import { createContext } from "react";
import type { Expense } from "@/entities/expense/model/types.ts";

export type ExpensesState = {
  expenses: Expense[];
};

const ExpensesStateContext = createContext<ExpensesState | null>(null);

export default ExpensesStateContext;
