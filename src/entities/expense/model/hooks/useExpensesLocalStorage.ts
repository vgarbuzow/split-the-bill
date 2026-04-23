import type { Expense } from "@/entities/expense/model/types.ts";

const useTasksLocalStorage = () => {
  const savedExpenses = localStorage.getItem("expenses");

  const saveExpenses = (expenses: Expense[]) => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  };

  return {
    savedExpenses: savedExpenses ? JSON.parse(savedExpenses) : null,
    saveExpenses,
  };
};

export default useTasksLocalStorage;
