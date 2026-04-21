import Button from "@/shared/ui/button";
import CloseIcon from "@/shared/icons/close-icon";
import style from "./DebtItem.module.scss";

const DebtItem = () => {
  return (
    <>
      <span className={style.item}>Вадим</span>
      <span className={style.item}>10500</span>
      <span className={style.deleteButtonContainer}>
        <Button variant="icon" className={style.deleteButton}>
          <CloseIcon />
        </Button>
      </span>
    </>
  );
};

export default DebtItem;
