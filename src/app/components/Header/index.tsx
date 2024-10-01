/* eslint-disable @next/next/no-img-element */
"use client";

import { useMediaQuery } from "react-responsive";
import styles from "./styles.module.css";
import Link from "next/link";
import BurgerMenu from "./children";
import { useState } from "react";

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
}) => {
  const isTablet = useMediaQuery({ maxWidth: 1439 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>LOGO</div>
        {isTablet || isMobile ? (
          <>
            {!isOpen && (
              <img
                className={styles.burgerButton}
                onClick={() => setIsOpen(!isOpen)}
                src="https://pics.st/210/c7b/b59fb71f.png"
                alt="Next.js logo"
                width={isTablet ? 44 : 32}
                height={isTablet ? 44 : 32}
              />
            )}
          </>
        ) : (
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
        )}
      </div>
      {isOpen && (
        <BurgerMenu
          isBalanceBlockVisible={isBalanceBlockVisible}
          isReportsBlockVisible={isReportsBlockVisible}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
