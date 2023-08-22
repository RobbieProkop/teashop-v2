import React from "react";
import styles from "./grid.module.scss";
import Product, { ProductType } from "../Product/Product";
import { getProducts } from "../../actions/actions";

const ProductsGridHome = async () => {
  const products: ProductType[] = await getProducts();
  return (
    <div className={styles.cardGrid}>
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
};
export default ProductsGridHome;
