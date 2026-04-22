import styles from "./ExpensesCalculator.module.scss";
import Button from "@/shared/ui/button";

const ExpensesCalculator = () => {
  return (
    <div className={styles.calculator}>
      <Button type="button">Рассчитать</Button>
    </div>
  );
};

export default ExpensesCalculator;
