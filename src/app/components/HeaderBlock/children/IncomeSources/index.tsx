"use client";

import { useState } from "react";
import styles from "./styles.module.css";

const IncomeSources: React.FunctionComponent = () => {
  const [isOperatorsBlockSelected, setIsOperatorsBlockSelected] =
    useState<boolean>(true);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        Дополнительные источники выручки для разных компаний
      </div>
      <div className={styles.infoBlock}>
        <div className={styles.switchBlock}>
          <button
            onClick={() => setIsOperatorsBlockSelected(true)}
            className={
              isOperatorsBlockSelected
                ? styles.selectedSwitcher
                : styles.switcher
            }
          >
            Операторам
          </button>

          <button
            onClick={() => setIsOperatorsBlockSelected(false)}
            className={
              isOperatorsBlockSelected
                ? styles.switcher
                : styles.selectedSwitcher
            }
          >
            ОТТ сервисам
          </button>
        </div>
        <div className={styles.subTitle}>
          {isOperatorsBlockSelected
            ? "Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации"
            : "Дополнительные возможности обогащения данных об аудитории и монетизации"}
        </div>
      </div>
    </div>
  );
};

export default IncomeSources;
