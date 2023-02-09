import { fetchProducts } from "@/models/fetchProducts.models";
import Image from "next/image";
import styles from "./singleProduct.module.css";

interface Params {
  params: {
    id: string;
  };
}
const fetchProduct = (id: string) => {
  return fetch(`https://api.mercadolibre.com/items/${id}`).then((response) =>
    response.json().then((data) => [data])
  );
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
    <section>
      {/* {products.map((product) => (
        <div key={product.id} className={styles.singleProductContainer}>
          <Image
            width={400}
            height={400}
            src={product.pictures[0].url}
            alt="fotoProducto"
          />
          <div>
            <div>
              <p>{product.title}</p>
            </div>
            <div>{description}</div>
          </div>
        </div>
      ))} */}
    </section>
  );
};

export default Producto;
