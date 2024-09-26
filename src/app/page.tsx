/* eslint-disable @next/next/no-img-element */
import IncomeSources from "./components/IncomeSources";
import Header from "./components/Header";
import MainBanner from "./components/MainBanner";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <div
        style={{
          backgroundColor: "#E8EDEE",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{ position: "absolute", top: "67px", left: "0", zIndex: "0" }}
        >
          <img
            src="https://pics.st/599/ba1/8ba18cbc.png"
            alt="Next.js logo"
            width={1440}
            height={801}
          />
        </div>
        <div
          style={{
            width: "1220px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            zIndex: "1",
          }}
        >
          <Header />
          <MainBanner />
          <IncomeSources />
        </div>
      </div>
      <footer>s</footer>
    </div>
  );
}
