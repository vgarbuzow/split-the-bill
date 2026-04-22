import styles from "./DebtPage.module.scss";
import AddDebtForm from "@/features/debts/add";
import DebtList from "@/entities/debt/ui/list";
import DebtsInfo from "@/features/debts/info";
import DebtsCalculator from "@/features/debts/calculator";
import { useDebtsState } from "@/entities/debt/model";
import Divider from "@/shared/ui/divider";

const DebtPage = () => {
  const { debts } = useDebtsState();
  const hasDebts = debts.length > 0;

  return (
    <div className={styles.debts}>
      <h1 className={styles.title}>Поделим поровну</h1>
      <AddDebtForm />
      <Divider />
      <DebtList />
      {hasDebts && (
        <>
          <Divider />
          <DebtsInfo />
          <Divider />
          <DebtsCalculator />
        </>
      )}
    </div>
  );
};

export default DebtPage;
