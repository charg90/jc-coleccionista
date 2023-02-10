import { fetchProducts } from "@/models/fetchProducts.models";
import Image from "next/image";
import styles from "./singleProduct.module.css";

interface Params {
  params: {
    id: string;
  };
}

const Producto = async ({ params }: Params) => {
  const { id } = params;
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

  const productsData = fetchProduct(id);
  const descriptionData = fetchDescription(id);

  const [products, description] = await Promise.all([
    productsData,
    descriptionData,
  ]);

  return (
    <section>
      {products.map((product) => (
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
      ))}
    </section>
  );
};

export default Producto;
