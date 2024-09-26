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
      <button className={styles.callButton}>Заказать звонок</button>
    </div>
  );
};

export default MainBanner;
