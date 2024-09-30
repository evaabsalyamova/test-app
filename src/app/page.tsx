import styles from "./styles.module.css";
import HeaderBlock from "./components/HeaderBlock";
import BalanceBlock from "./components/BalanceBlock";
import PartnersBlock from "./components/PartnersBlock";
import ReportsBlock from "./components/ReportsBlock";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <HeaderBlock />
      <BalanceBlock />
      <PartnersBlock />
      <ReportsBlock />
      <Footer />
    </div>
  );
}
