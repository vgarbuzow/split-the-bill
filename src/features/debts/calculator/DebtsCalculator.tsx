import styles from "./DebtsCalculator.module.scss";
import Button from "@/shared/ui/button";

const DebtsCalculator = () => {
  return (
    <div className={styles.calculator}>
      <Button>Рассчитать</Button>
    </div>
  );
};

export default DebtsCalculator;
