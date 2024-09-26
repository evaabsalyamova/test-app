import styles from "./styles.module.css";

const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.linksBlock}>
        <button className={styles.link}>Преимущества</button>
        <button className={styles.link}>Как работаем</button>
      </div>
    </div>
  );
};

export default Header;
