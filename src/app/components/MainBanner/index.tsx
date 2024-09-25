import styles from "./styles.module.css";

const MainBanner: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Монетизируйте клиентскую базу, не снижая NPS
      </div>
      <div className={styles.subTitle}>
        Найдите идеальный баланс выручки и удовлетворённости пользователей
        с платформой рекламной монетизации
      </div>
      <div className={styles.callButton}>Заказать звонок</div>
    </div>
  );
};

export default MainBanner;
