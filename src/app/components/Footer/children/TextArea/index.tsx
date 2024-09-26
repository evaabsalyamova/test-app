"use client";

import React, { useState } from "react";
import styles from "./styles.module.css";

const TextArea = () => {
  const [text, setText] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <textarea
      className={styles.textArea}
      id="text"
      value={text}
      onChange={handleChange}
      placeholder="Напишите свой вопрос"
    />
  );
};

export default TextArea;
