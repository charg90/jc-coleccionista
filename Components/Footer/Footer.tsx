import Image from "next/image";
import React from "react";
import Logo from "./../../public/logofinal.png";
import Facebook from "./../../public/facebook-1-svgrepo-com.svg";
import Instagram from "./../../public/instagram-1-svgrepo-com.svg";
import Meli from "./../../public/mercadolibre-svgrepo-com.svg";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <div>
        <Image width="100" height="100" src={Logo} alt="jyc-Logo" />
      </div>
      <div className={styles.logoContainer}>
        <Image width="40" height="50" src={Facebook} alt="facebook-Logo" />
        <Image width="40" height="50" src={Instagram} alt="instagram-Logo" />
        <Image width="40" height="50" src={Meli} alt="meli-Logo" />
      </div>
      <div className={styles.contactoContainer}>
        <p>Celular</p>
        <p>Entrega Lanus</p>
        <p>Entrega San Telmo</p>
        <p>Entrega la Boca</p>
      </div>
    </section>
  );
};

export default Footer;
