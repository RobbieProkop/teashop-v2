import { FC } from "react";
import styles from "./grid.module.scss";
import Product, { ProductType } from "../Product/Product";
import { getProducts } from "../../actions/actions";

import { useStore } from "../../src/store";

const ProductsGridHome: FC = async () => {
  const products: ProductType[] = await getProducts();
  // useStore().setState({});
  return (
    <div className={styles.cardGrid}>
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
};
export default ProductsGridHome;
