import styles from "./DebtsInfo.module.scss";

const DebtsInfo = () => {
  return (
    <>
      <div className={styles.debtsInfo}>
        <span>Всего человек: 3</span>
        <span>Общая сумма: 100500</span>
      </div>
    </>
  );
};

export default DebtsInfo;
