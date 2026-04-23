export type Expense = {
  id: string;
  ownerName: string;
  amount: number;
};

export type ExpensesState = {
  expenses: Expense[];
};

export type ExpensesApi = {
  add: (expense: Expense) => void;
  deleteById: (id: string) => void;
  isExistsByName: (ownerName: string) => boolean;
  deleteAll: () => void;
};
