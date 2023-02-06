import Footer from "@/Components/Footer/Footer";
import Image from "next/image";
import Banner from "./../public/302180112_501737175289456_8291271586690268658_n.jpg";
import styles from "./home.module.css";
import photoProfile from "../public/fotoPerfil.jpg";
import local from "../public/localSantelmo.jpg";

export default function Home() {
  return (
    <>
      <main className={styles.homeContainer}>
        <Image src={Banner} alt="banner-image" className={styles.homeImage} />
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>JC coleccionista</h1>
          <div>
            <h2 className={styles.subtitle}> Quien Soy ? </h2>
            <div className={styles.profileContainer}>
              <Image
                src={photoProfile}
                alt="profile-photo"
                className={styles.profileImage}
              />
              <p>
                Hola mi nombre es Juan Carlos y colecciono y tengo a la venta
                muchas cosas retro. Sarasa Sarasa Sarasa Sarasa Sarasa Sarasa
                Sar asa Sara saSaras aSarasaSa rasaSarasa ara aSaras aSarasa
              </p>
            </div>
            <h2 className={styles.subtitle}> Que colecciono? </h2>
            <div className={styles.profileContainer}>
              <p>
                lorem ipsum dolor sit amet, consectetur adip Lorem, ipsum dolor
                sit amet consectetur adipisicing elit. Maiores in officia
                cupiditate reprehenderit vitae repellat aperiam quas, accusamus
                facere laboriosam, totam mollitia, laborum porro corporis. Id,
                quia. Dolores, non quaerat?
              </p>
              <Image
                src={local}
                alt="local"
                className={styles.profileImage}
                id="local"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
