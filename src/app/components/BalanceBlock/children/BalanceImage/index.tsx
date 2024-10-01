/* eslint-disable @next/next/no-img-element */
import { useMediaQuery } from "react-responsive";
import styles from "./styles.module.css";

const BalanceImage: React.FunctionComponent = () => {
  const isTablet = useMediaQuery({ maxWidth: 1439 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={styles.container}>
      <div className={styles.circle} />
      <div className={styles.line} />
      <div className={styles.image}>
        <img
          src="https://pics.st/068/684/33b83c98.png"
          alt="Balance Image"
          width={isTablet || isMobile ? 53 : 80}
          height={isTablet || isMobile ? 50 : 75}
        />
      </div>
      <div className={styles.line} />
      <div className={styles.circle} />
    </div>
  );
};

export default BalanceImage;
