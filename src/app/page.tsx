import styles from "./styles.module.css";
import HeaderBlock from "./components/HeaderBlock";
import BalanceBlock from "./components/BalanceBlock";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <HeaderBlock />
      <BalanceBlock />
      <footer>s</footer>
    </div>
  );
}
