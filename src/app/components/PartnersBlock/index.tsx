/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";

const PartnersBlock: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>Наши партнёры по монетизации</div>
        <div className={styles.logos}>
          <img
            src="https://pics.st/463/63f/d80c5646.png"
            alt="Next.js logo"
            width={177}
            height={54}
          />
          <img
            src="https://pics.st/49e/82c/7210814a.png"
            alt="Next.js logo"
            width={102}
            height={71}
          />
          <img
            src="https://pics.st/f04/514/904e39a2.png"
            alt="Next.js logo"
            width={175}
            height={45}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnersBlock;
