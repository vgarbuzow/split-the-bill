import { type FC } from "react";
import { Button, Input } from "@/shared/ui";
import {
  useExpenseItemForm,
  type UseExpenseItemFormParams,
} from "@/entities/expense/lib/hooks/useExpenseForm.ts";
import styles from "./ExpenseItemForm.module.scss";
import { ConfirmIcon } from "@/shared/icons";

type ExpenseItemFormProps = UseExpenseItemFormParams & {
  layout?: "inline" | "vertical";
};

const ExpenseItemForm: FC<ExpenseItemFormProps> = (props) => {
  const form = useExpenseItemForm(props);
  const { layout } = props;

  if (layout === "inline") {
    return (
      <form className={styles.inline} onSubmit={form.onSubmit}>
        <Input {...form.ownerNameProps} size="sm" />
        <Input {...form.amountProps} size="sm" />
        <Button type="submit" variant="icon">
          <ConfirmIcon />
        </Button>
      </form>
    );
  }

  return (
    <form className={styles.vertical} onSubmit={form.onSubmit}>
      <Input {...form.ownerNameProps} size="lg" />
      <Input {...form.amountProps} size="lg" />
      <Button type="submit" variant="primary" size="lg" fullWidth>
        Сохранить
      </Button>
    </form>
  );
};

export default ExpenseItemForm;
