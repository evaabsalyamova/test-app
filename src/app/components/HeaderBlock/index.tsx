/* eslint-disable @next/next/no-img-element */
import { useMediaQuery } from "react-responsive";
import IncomeSources from "./children/IncomeSources";
import MainBanner from "./children/MainBanner";

import styles from "./styles.module.css";

const HeaderBlock: React.FunctionComponent = () => {
  const isDesktop = useMediaQuery({ maxWidth: 1440 });
  const isTablet = useMediaQuery({ maxWidth: 768 });

  const imageWidthByViewport = isDesktop ? 1440 : isTablet ? 768 : 320;
  const imageHeightByViewport = isDesktop ? 771 : isTablet ? 771 : 771;

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
