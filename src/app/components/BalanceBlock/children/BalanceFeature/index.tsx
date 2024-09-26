import { icons } from "@/app/icons";
import styles from "./styles.module.css";

interface IProps {
  title: string;
  subTitle: string;
}

const BalanceFeature: React.FunctionComponent<IProps> = ({
  title,
  subTitle,
}) => {
  return (
    <div className={styles.container}>
      {icons.arrow}
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
    </div>
  );
};

export default BalanceFeature;
