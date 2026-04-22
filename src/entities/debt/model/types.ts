export type Debt = {
  id: string;
  name: string;
  amount: number;
};

export type DebtsState = {
  debts: Debt[];
};

export type DebtsApi = {
  addDebt: (debt: Debt) => void;
  removeDebt: (id: string) => void;
};
