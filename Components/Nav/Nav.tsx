import styles from "./nav.module.css";
import localFont from "@next/font/local";
import logo from "./../../public/logoFinal.png";
import Image from "next/image";
const champion = localFont({
  src: [
    {
      path: "./fonts/NationalChampionBold.woff.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-champion",
});

const Nav = () => {
  return (
    <div className={champion.className}>
      <div className={`${styles.navContainer} ${champion.className}`}>
        <Image width={70} src={logo} alt="logo" />
        <p className={styles.navText}>Mi coleccion</p>
        <p className={styles.navText}>Preguntas Frecuentes</p>
      </div>
    </div>
  );
};

export default Nav;
