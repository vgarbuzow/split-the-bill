import { useExpensesApi, useExpensesState } from "@/entities/expense";
import { useMemo } from "react";
import calculateDebts from "@/features/debt/calculator/lib/calculateDebts.ts";
import styles from "./DebtsCalculator.module.scss";

const DebtsCalculator = () => {
  const { expenses } = useExpensesState();
  const { getTotalAmount } = useExpensesApi();

  const debts = useMemo(() => {
    const total = getTotalAmount();
    return calculateDebts(expenses, total);
  }, [expenses, getTotalAmount]);

  if (!debts || debts.length === 0) {
    return <span>Недостаточно данных для расчета</span>;
  }
  return <div className={styles.calculator}></div>;
};

export default DebtsCalculator;
