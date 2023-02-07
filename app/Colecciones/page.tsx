"use client";
import React from "react";
import { ProductsInfo } from "@/dataProductsInfo/dataProductsInfo";
import Cards from "@/Components/Cards/Cards";
import styles from "./colecciones.module.css";
const Colecciones = () => {
  return (
    <div className={styles.cardContainer}>
      {ProductsInfo.map((product) => (
        <Cards key={product.id} data={product} />
      ))}
    </div>
  );
};

export default Colecciones;
