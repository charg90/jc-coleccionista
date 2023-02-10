import { product } from "@/models/product.model";
import styles from "./searchBar.module.css";

interface SearchBarProps {
  setProductsInfo: React.Dispatch<React.SetStateAction<product[]>>;
  products: product[];
}

const SearchBar = ({ setProductsInfo, products }: SearchBarProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLocaleLowerCase();
    const filterProducts = products.filter((product) =>
      product.title.toLocaleLowerCase().includes(inputValue)
    );
    setProductsInfo(filterProducts);
  };
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        name="text"
        className={styles.input}
        placeholder="Buscar ..."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
