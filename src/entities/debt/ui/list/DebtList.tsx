import styles from "./DebtList.module.scss";
import DebtItem from "@/entities/debt/ui/item";
import { useDebtsState } from "@/entities/debt/model";
import { Fragment } from "react";

const DebtList = () => {
  const { debts } = useDebtsState();
  const hasDebts = debts?.length > 0;

  if (!hasDebts) {
    return (
      <div className={styles.emptyMessage}>
        Данные отсутствуют, добавьте новый долг
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      <div className={styles.gridHeader}>Имя</div>
      <div className={styles.gridHeader}>Сумма</div>
      <div></div>

      {debts.map((debt) => (
        <Fragment key={debt.id}>
          <hr className={styles.divider} />
          <DebtItem debt={debt} />
        </Fragment>
      ))}
    </div>
  );
};

export default DebtList;
