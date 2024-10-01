/* eslint-disable @next/next/no-img-element */
import { useMediaQuery } from "react-responsive";
import IncomeSources from "./children/IncomeSources";
import MainBanner from "./children/MainBanner";

import styles from "./styles.module.css";

const HeaderBlock: React.FunctionComponent = () => {
  const isTablet = useMediaQuery({ maxWidth: 1440 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const imageWidthByViewport = isMobile ? 320 : isTablet ? 768 : 1440;
  const imageHeightByViewport = isTablet ? 771 : isMobile ? 771 : 771;

  return (
    <div className={styles.container}>
      <img
        className={styles.banner}
        src="https://pics.st/599/ba1/8ba18cbc.png"
        alt="Next.js logo"
        width={imageWidthByViewport}
        height={imageHeightByViewport}
      />
      <div className={styles.componentsBlock}>
        <MainBanner />
        <IncomeSources />
      </div>
    </div>
  );
};

export default HeaderBlock;
