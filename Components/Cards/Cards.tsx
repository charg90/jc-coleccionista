import styles from "./card.module.css";
import whatsapp from "./../../public/whatsapp.svg";
import Image from "next/image";
import Link from "next/link";

interface Cardata {
  id: number;
  codigo: string;
  title: string;
}

interface Props {
  data: Cardata;
}

const Cards = ({ data }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.textBox}>
        <div className={styles.textContent}>
          <p className={styles.h1}>{data.title.substring(0, 40)}</p>
        </div>
        <div className={styles.actionsContainer}>
          <Link
            href={`https://wa.me/5491167521676?text=Buenas%20te%20consulto%20por%20${data.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image width={30} src={whatsapp} alt="whatsappp" />
          </Link>
          <Link href={`Colecciones/${data.codigo}`}>
            <button>Ver mas</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
