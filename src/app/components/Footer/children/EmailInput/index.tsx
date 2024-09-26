"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";

const EmailInput: React.FunctionComponent = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
  };

  const isEmailInvalid = !isValid && email;

  return (
    <div className={styles.container}>
      <input
        className={styles.emailInput}
        style={isEmailInvalid ? { borderColor: "#FF4026" } : undefined}
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Введите e-mail"
      />
      {isEmailInvalid && (
        <span className={styles.errorMessage}>Неправильно указана почта</span>
      )}
    </div>
  );
};

export default EmailInput;
