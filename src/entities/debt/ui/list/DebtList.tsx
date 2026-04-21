import styles from "./DebtList.module.scss";
import DebtItem from "@/entities/debt/ui/item";

const DebtList = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.gridHeader}>Имя</div>
      <div className={styles.gridHeader}>Сумма</div>
      <div></div>

      <hr className={styles.divider} />
      <DebtItem />

      <hr className={styles.divider} />
      <DebtItem />

      <hr className={styles.divider} />
      <DebtItem />
    </div>
  );
};

export default DebtList;
