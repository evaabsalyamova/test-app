/* eslint-disable @next/next/no-img-element */
import { useMediaQuery } from "react-responsive";
import styles from "./styles.module.css";

const PartnersBlock: React.FunctionComponent = () => {
  const isTablet = useMediaQuery({ maxWidth: 1439 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Наши партнёры по монетизации</div>
        <div className={styles.logos}>
          {isMobile ? (
            <>
              <img
                src="https://pics.st/463/63f/d80c5646.png"
                alt="Next.js logo"
                width={139}
                height={43}
              />
              <img
                src="https://pics.st/f04/514/904e39a2.png"
                alt="Next.js logo"
                width={137}
                height={35}
              />
              <img
                src="https://pics.st/49e/82c/7210814a.png"
                alt="Next.js logo"
                width={85}
                height={59}
              />
            </>
          ) : (
            <>
              <img
                src="https://pics.st/463/63f/d80c5646.png"
                alt="Next.js logo"
                width={isTablet ? 121 : 177}
                height={isTablet ? 38 : 54}
              />
              <img
                src="https://pics.st/49e/82c/7210814a.png"
                alt="Next.js logo"
                width={isTablet ? 70 : 102}
                height={isTablet ? 49 : 71}
              />
              <img
                src="https://pics.st/f04/514/904e39a2.png"
                alt="Next.js logo"
                width={isTablet ? 120 : 175}
                height={isTablet ? 31 : 45}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnersBlock;
