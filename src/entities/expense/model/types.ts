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
  remove: (id: string) => void;
  isExistsByName: (ownerName: string) => boolean;
};
