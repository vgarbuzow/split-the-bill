import styles from "./DebtList.module.scss";
import DebtItem from "@/entities/debt/ui/item";

const DebtList = () => {
  return (
    <ul className={styles.debtsList}>
      <li className={styles.debtsListHeader}>
        <span>Имя</span>
        <span>Сумма</span>
      </li>
      <DebtItem />
      <DebtItem />
      <DebtItem />
    </ul>
  );
};

export default DebtList;
