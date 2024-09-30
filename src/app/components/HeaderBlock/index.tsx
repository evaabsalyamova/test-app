/* eslint-disable @next/next/no-img-element */
import IncomeSources from "./children/IncomeSources";
import MainBanner from "./children/MainBanner";

import styles from "./styles.module.css";

const HeaderBlock: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img
          src="https://pics.st/599/ba1/8ba18cbc.png"
          alt="Next.js logo"
          width={1440}
          height={801}
        />
      </div>
      <div className={styles.componentsBlock}>
        <MainBanner />
        <IncomeSources />
      </div>
    </div>
  );
};

export default HeaderBlock;
