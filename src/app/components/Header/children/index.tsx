/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";
import Link from "next/link";

interface IProps {
  isBalanceBlockVisible: boolean;
  isReportsBlockVisible: boolean;
  onClose(): void;
}

const activeLinkStyles = {
  color: "#E0570E",
  textDecoration: "underline",
  textUnderlineOffset: "3px",
};

const BurgerMenu: React.FunctionComponent<IProps> = ({
  isBalanceBlockVisible,
  isReportsBlockVisible,
  onClose,
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.burgerButton}
        onClick={onClose}
        src="https://pics.st/7b8/7b8/b7b8e546.png"
        alt="Next.js logo"
        width={44}
        height={44}
      />
      <Link href="#balance">
        <button
          style={isBalanceBlockVisible ? activeLinkStyles : undefined}
          className={styles.link}
          onClick={onClose}
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
          onClick={onClose}
        >
          Как работаем
        </button>
      </Link>
    </div>
  );
};

export default BurgerMenu;
