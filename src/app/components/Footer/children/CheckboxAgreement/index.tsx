"use client";

import React, { useState } from "react";

import styles from "./styles.module.css";

const CheckboxAgreement = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles.checkBoxBlock}>
      <input
        className={styles.checkBox}
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <label className={styles.checkBoxText}>
        Я ознакомлен(а) с{" "}
        <span className={styles.underlined}>политикой конфиденциальности</span>{" "}
        и согласен(на) на обработку{" "}
        <span className={styles.underlined}>персональных данных.</span>
      </label>
    </div>
  );
};

export default CheckboxAgreement;
