import styles from "./DebtsInfo.module.scss";
import { useDebtsState } from "@/entities/debt/model";

const DebtsInfo = () => {
  const { debts } = useDebtsState();

  const sum = debts.reduce((acc, debt) => {
    return acc + debt.amount;
  }, 0);

  return (
    <div className={styles.debtsInfo}>
      <span>Всего долгов: {debts.length}</span>
      <span>Общая сумма: {sum}</span>
    </div>
  );
};

export default DebtsInfo;
