import styles from "./styles.module.css";
import HeaderBlock from "./components/HeaderBlock";
import BalanceBlock from "./components/BalanceBlock";
import PartnersBlock from "./components/PartnersBlock";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <HeaderBlock />
      <BalanceBlock />
      <PartnersBlock />
      <footer>s</footer>
    </div>
  );
}
