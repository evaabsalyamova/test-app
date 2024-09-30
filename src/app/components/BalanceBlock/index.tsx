import BalanceFeature from "./children/BalanceFeature";
import BalanceImage from "./children/BalanceImage";
import styles from "./styles.module.css";

const BalanceBlock: React.FunctionComponent = () => {
  return (
    <div id="balance" className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>
          Баланс между выручкой и удовлетворённостью пользователей
        </span>
        <div className={styles.promoBanner}>
          <BalanceFeature
            title="Частотность под контролем"
            subTitle="Чтобы не ронять NPS и не увеличивать отток пользователей"
          />
          <BalanceImage />
          <BalanceFeature
            title="Максимальная выручка"
            subTitle="За счёт заполенения всех рекламных мест по высокой цене"
          />
        </div>
      </div>
    </div>
  );
};

export default BalanceBlock;
