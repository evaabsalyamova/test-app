"use client";

import styles from "./styles.module.css";
import HeaderBlock from "./components/HeaderBlock";
import BalanceBlock from "./components/BalanceBlock";
import PartnersBlock from "./components/PartnersBlock";
import ReportsBlock from "./components/ReportsBlock";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export default function Home() {
  const [isBalanceBlockVisible, setIsBalanceBlockVisible] = useState(false);
  const [isReportsBlockVisible, setIsReportsBlockVisible] = useState(false);

  return (
    <div className={styles.mainContainer}>
      <Header
        isBalanceBlockVisible={isBalanceBlockVisible}
        isReportsBlockVisible={isReportsBlockVisible}
      />
      <HeaderBlock />

      <VisibilitySensor partialVisibility onChange={setIsBalanceBlockVisible}>
        <BalanceBlock />
      </VisibilitySensor>

      <PartnersBlock />

      <VisibilitySensor partialVisibility onChange={setIsReportsBlockVisible}>
        <ReportsBlock />
      </VisibilitySensor>

      <Footer />
    </div>
  );
}
