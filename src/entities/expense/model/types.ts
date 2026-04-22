export type Expense = {
  id: string;
  ownerName: string;
  amount: number;
};

export type ExpensesState = {
  expenses: Expense[];
};

export type ExpensesApi = {
  addExpense: (expense: Expense) => void;
  removeExpense: (id: string) => void;
};
