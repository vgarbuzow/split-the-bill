import Button from "@/shared/ui/button";
import CloseIcon from "@/shared/icons/close-icon";
import styles from "./DebtItem.module.scss";

const DebtItem = () => {
  return (
    <li className={styles.debtsListItem}>
      <span>Вадим</span>
      <span>10500</span>
      <Button variant="icon">
        <CloseIcon />
      </Button>
    </li>
  );
};

export default DebtItem;
