import styles from "./nav.module.css";
import localFont from "@next/font/local";
import logo from "./../../public/logoFinal.png";
import Image from "next/image";
import { Route } from "@/models/routes.models";
import Link from "next/link";

interface props {
  pathNames: Route[];
}

const champion = localFont({
  src: [
    {
      path: "./Fonts/NationalChampionBold.woff.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-champion",
});

const Nav = ({ pathNames }: props) => {
  return (
    <div className={champion.className}>
      <div className={`${styles.navContainer} ${champion.className}`}>
        <Image width={70} src={logo} alt="logo" />
        {pathNames.map((pathName) => (
          <>
            <Link href={pathName.path} className={styles.navText}>
              {pathName.name}
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Nav;
