/* eslint-disable @next/next/no-img-element */
import { icons } from "@/app/icons";
import styles from "./styles.module.css";
import { useMediaQuery } from "react-responsive";

const features = [
  { text: "Выручка, CTR, показы и другие показатели в реальном времени." },
  { text: "Инструменты контроля качества трафика." },
  { text: "Ежемесячные автоматические отчёты для каждого правообладателя." },
];

const ReportsBlock: React.FunctionComponent = () => {
  const isTablet = useMediaQuery({ maxWidth: 1439 });

  return (
    <div id="reports" className={styles.background}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.title}>
            Подробные отчёты для вас и правообладателей
          </div>
          <div className={styles.featuresList}>
            {features.map(({ text }, index) => (
              <div className={styles.feature} key={text + index}>
                <div className={styles.featureIcon}>{icons.arrow}</div>
                <div className={styles.featureText}>{text}</div>
              </div>
            ))}
          </div>
          <button className={styles.callButton}>Заказать звонок</button>
        </div>
        <img
          className={styles.image}
          src="https://pics.st/9e7/ee9/a7047f3e.png"
          alt="macbook"
          width={isTablet ? 320 : 661}
          height={isTablet ? 266 : 482}
        />
      </div>
    </div>
  );
};

export default ReportsBlock;
