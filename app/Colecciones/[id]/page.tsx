import Footer from "@/Components/Footer/Footer";
import Nav from "@/Components/Nav/Nav";
import { fetchProducts } from "@/models/fetchProducts.models";
import { Route } from "@/models/routes.models";
import Image from "next/image";
import styles from "./singleProduct.module.css";
import whatsApp from "./../../../public/whatsapp.svg";
interface Params {
  params: {
    id: string;
  };
}
const fetchProduct = async (id: string) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const resposeToJson = await response.json();
  return [resposeToJson];
};
const fetchDescription = (id: string) => {
  return fetch(
    `https://api.mercadolibre.com/items/${id}/description#json`
  ).then((response) => response.json().then((data) => data.plain_text));
};

const Producto = async ({ params }: Params) => {
  const { id } = params;

  const products: fetchProducts[] = await fetchProduct(id);
  const description = await fetchDescription(id);

  return (
    <section className={styles.container}>
      <Nav pathNames={[Route.HOME, Route.PREGUNTAS]} />
      {products.map((product) => (
        <div className={styles.ccontainer} key={product.id}>
          <div className={styles.singleProductContainer}>
            <Image
              width={360}
              height={360}
              src={
                product.pictures && product.pictures[0]
                  ? product.pictures[0].url
                  : ""
              }
              alt="fotoProducto"
              priority
            />

            <div>
              <p className={styles.productTitle}>{product.title}</p>
              <p className={styles.productText}>{description}</p>
              <button className={styles.productBtn}>whatsapp</button>
            </div>
          </div>
        </div>
      ))}

      <Footer />
    </section>
  );
};

export default Producto;
