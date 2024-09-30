import styles from "./styles.module.css";
import Link from "next/link";

const Header: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.linksBlock}>
        <Link href="#balance">
          <button className={styles.link}>Преимущества</button>
        </Link>
        <Link href="#reports">
          <button className={styles.link}>Как работаем</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
