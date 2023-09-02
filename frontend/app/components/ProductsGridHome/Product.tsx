import { FC } from "react";
import styles from "./grid.module.scss";
import Product, { ProductType } from "../Product/Product";
import { getProducts } from "../../actions/actions";

const ProductsGridHome: FC = async () => {
  const products: ProductType[] = await getProducts(
    "http://localhost:8080/api/products"
  );
  return (
    <div className={styles.cardGrid}>
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
};
export default ProductsGridHome;
