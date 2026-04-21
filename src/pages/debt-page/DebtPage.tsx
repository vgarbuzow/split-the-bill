import styles from "./DebtPage.module.scss";
import Divider from "@/shared/ui/divider";
import AddDebtForm from "@/features/debts/add";
import DebtList from "@/entities/debt/ui/list";
import DebtsInfo from "@/features/debts/info";
import DebtsCalculator from "@/features/debts/calculator";

const DebtPage = () => {
  return (
    <>
      <div className={styles.debts}>
        <h1 className={styles.title}>Поделим поровну</h1>
        <AddDebtForm />
        <Divider />
        <DebtList />
        <Divider />
        <DebtsInfo />
        <Divider />
        <DebtsCalculator />
      </div>
    </>
  );
};

export default DebtPage;
