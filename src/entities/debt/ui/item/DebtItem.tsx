import Button from "@/shared/ui/button";
import CloseIcon from "@/shared/icons/close-icon";
import style from "./DebtItem.module.scss";
import { type Debt, useDebtsApi } from "@/entities/debt/model";
import type { FC } from "react";

type DebtItemProps = {
  debt: Debt;
};

const DebtItem: FC<DebtItemProps> = ({ debt }) => {
  const { removeDebt } = useDebtsApi();
  return (
    <>
      <span className={style.item}>{debt.name}</span>
      <span className={style.item}>{debt.amount}</span>
      <span className={style.deleteButtonContainer}>
        <Button
          variant="icon"
          className={style.deleteButton}
          onClick={() => removeDebt(debt.id)}
        >
          <CloseIcon />
        </Button>
      </span>
    </>
  );
};

export default DebtItem;
