import React from "react";
import styles from "./card.module.css";
import whatsapp from "./../../public/whatsapp.svg";
import Image from "next/image";
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
        <p className={styles.info}>{data.title}</p>
        <p>{data.codigo}</p>
        <div className={styles.actionsContainer}>
          <Image src={whatsapp} alt="whatsappp" />
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
