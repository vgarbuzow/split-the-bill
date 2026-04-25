import { useExpensesApi, useExpensesState } from "@/entities/expense";
import { useMemo } from "react";
import calculateDebts from "../lib/calculateDebts.ts";
import styles from "./DebtsCalculator.module.scss";

const DebtsCalculator = () => {
  const { expenses } = useExpensesState();
  const { getTotalAmount } = useExpensesApi();

  const debts = useMemo(() => {
    const total = getTotalAmount();
    return calculateDebts(expenses, total);
  }, [expenses, getTotalAmount]);

  if (!debts || debts.length === 0) {
    return (
      <span className={styles.emptyDebts}>
        Для расчета добавтье еще одного человека
      </span>
    );
  }
  return (
    <div className={styles.calculator}>
      <span className={styles.title}>Кто кому и сколько должен</span>
      {debts.map(({ id, from, to, amount }) => (
        <span key={id}>{`${from} -> ${amount} ₽ -> ${to}`}</span>
      ))}
    </div>
  );
};

export default DebtsCalculator;
