import { createContext } from "react";
import type { Expense } from "@/entities/expense/model/types.ts";

export type ExpensesApi = {
  add: (expense: Expense) => void;
  deleteById: (id: string) => void;
  isExistsByName: (ownerName: string) => boolean;
  deleteAll: () => void;
};

const ExpensesApiContext = createContext<ExpensesApi | null>(null);

export default ExpensesApiContext;
