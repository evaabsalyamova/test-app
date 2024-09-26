import styles from "./styles.module.css";
import HeaderBlock from "./components/HeaderBlock";
import BalanceBlock from "./components/BalanceBlock";
import PartnersBlock from "./components/PartnersBlock";
import ReportsBlock from "./components/ReportsBlock";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <HeaderBlock />
      <BalanceBlock />
      <PartnersBlock />
      <ReportsBlock />
      <Footer />
    </div>
  );
}
