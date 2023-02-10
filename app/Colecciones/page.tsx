"use client";

import { ProductsInfo } from "@/dataProductsInfo/dataProductsInfo";
import Cards from "@/Components/Cards/Cards";
import styles from "./colecciones.module.css";
import Nav from "@/Components/Nav/Nav";
import { Route } from "@/models/routes.models";
import { useState } from "react";
import { product } from "@/models/product.model";
import SearchBar from "@/Components/SearchBar/SearchBar";

const Colecciones = () => {
  const [products, setProductsInfo] = useState<product[]>(ProductsInfo);

  return (
    <>
      <Nav pathNames={[Route.HOME, Route.PREGUNTAS]} />
      <SearchBar setProductsInfo={setProductsInfo} products={ProductsInfo} />
      <div className={styles.cardContainer}>
        {products.map((product) => (
          <Cards key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default Colecciones;
