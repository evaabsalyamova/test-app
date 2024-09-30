import styles from "./styles.module.css";
import Link from "next/link";

interface IProps {
  isBalanceBlockVisible: boolean;
  isReportsBlockVisible: boolean;
}

const activeLinkStyles = {
  color: "#E0570E",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
};

const Header: React.FunctionComponent<IProps> = ({
  isBalanceBlockVisible,
  isReportsBlockVisible,
}) => (
  <div className={styles.container}>
    <div className={styles.logo}>LOGO</div>
    <div className={styles.linksBlock}>
      <Link href="#balance">
        <button
          style={isBalanceBlockVisible ? activeLinkStyles : undefined}
          className={styles.link}
        >
          Преимущества
        </button>
      </Link>
      <Link href="#reports">
        <button
          style={
            isReportsBlockVisible && !isBalanceBlockVisible
              ? activeLinkStyles
              : undefined
          }
          className={styles.link}
        >
          Как работаем
        </button>
      </Link>
    </div>
  </div>
);

export default Header;
