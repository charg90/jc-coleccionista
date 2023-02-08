import React from "react";
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
  const handlerLocation = (codigo: string) => {
    const response = fetch(`https://api.mercadolibre.com/items/${codigo}`)
      .then((response) => response.json())
      .then((data) => {
        window.open(data.permalink, "_blank");
      })
      .catch((err) => console.log(err));
    console.log(response);
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardInfo}>
        <div className={styles.cardTextContainer}>
          <p className={styles.cardText}>{data.title}</p>
          <p className={styles.cardText}>codigo:{data.codigo}</p>
        </div>

        <div className={styles.actionsContainer}>
          <Link
            href={`https://wa.me/5491167521676?text=Buenas%20te%20consulto%20por%20${data.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={whatsapp} alt="whatsappp" />
          </Link>
          <button
            onClick={() => handlerLocation(data.codigo)}
            className={styles.btnCard}
          >
            Ver mas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
