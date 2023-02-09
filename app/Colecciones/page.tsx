import { ProductsInfo } from "@/dataProductsInfo/dataProductsInfo";
import Cards from "@/Components/Cards/Cards";
import styles from "./colecciones.module.css";
import Nav from "@/Components/Nav/Nav";
import { Route } from "@/models/routes.models";

const Colecciones = () => {
  return (
    <>
      <Nav pathNames={[Route.HOME, Route.PREGUNTAS]} />
      <div className={styles.cardContainer}>
        {ProductsInfo.map((product) => (
          <Cards key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default Colecciones;
