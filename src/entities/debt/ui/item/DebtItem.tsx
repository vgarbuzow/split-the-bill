import Button from "@/shared/ui/button";
import CloseIcon from "@/shared/icons/close-icon";
import styles from "./DebtItem.module.scss";

const DebtItem = () => {
  return (
    <li className={styles.debtsListItem}>
      <span>Вадимasssddddddddddddddd</span>
      <span>10500sdsdsdsdsdsdsdsdsdsdsdsdsd</span>
      <Button variant="icon">
        <CloseIcon />
      </Button>
    </li>
  );
};

export default DebtItem;
