import styles from "./DebtPage.module.scss";
import Field from "@/shared/ui/field";
import Button from "@/shared/ui/button";
import Divider from "@/shared/ui/divider";
import CloseIcon from "@/shared/icons/close-icon";

const DebtPage = () => {
  return (
    <>
      <div className={styles.debts}>
        <h1 className={styles.title}>Поделим поровну</h1>
        <form className={styles.newDebt}>
          <Field id="name">Имя</Field>
          <Field id="amount">Сумма</Field>
          <Button>Добавить</Button>
        </form>
        <Divider />
        <ul className={styles.debtsList}>
          <li className={styles.debtsListHeader}>
            <span>Имя</span>
            <span>Сумма</span>
          </li>
          <li className={styles.debtsListItem}>
            <span>Вадим</span>
            <span>10500</span>
            <Button variant="icon">
              <CloseIcon />
            </Button>
          </li>
          <li className={styles.debtsListItem}>
            <span>Вадим</span>
            <span>10500</span>
            <Button variant="icon">
              <CloseIcon />
            </Button>
          </li>
          <li className={styles.debtsListItem}>
            <span>Вадим</span>
            <span>10500</span>
            <Button variant="icon">
              <CloseIcon />
            </Button>
          </li>
        </ul>
        <Divider />
        <div className={styles.stats}>
          <span>Всего человек: 3</span>
          <span>Общая сумма: 100500</span>
        </div>
        <Divider />
        <div className={styles.calculation}>
          <Button>Рассчитать</Button>
        </div>
      </div>
    </>
  );
};

export default DebtPage;
