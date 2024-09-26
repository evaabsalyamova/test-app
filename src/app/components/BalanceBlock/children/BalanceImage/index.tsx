/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";

const BalanceImage: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.line} />
      <div className={styles.image}>
        <img
          src="https://pics.st/068/684/33b83c98.png"
          alt="Balance Image"
          width={80}
          height={75}
        />
      </div>
      <div className={styles.line} />
      <div className={styles.circle} />
    </div>
  );
};

export default BalanceImage;
