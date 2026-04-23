import { useContext } from "react";
import ExpensesStateContext, {
  type ExpensesState,
} from "@/entities/expense/model/contexts/ExpensesStateContext.ts";
import ExpensesApiContext, {
  type ExpensesApi,
} from "@/entities/expense/model/contexts/ExpensesApiContext.ts";

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
