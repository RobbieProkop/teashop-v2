import React from "react";
import styles from "./grid.module.scss";
import products from "../../products";
import Product from "../Product/Product";

const ProductsGridHome = () => {
  return (
    <div className={styles.cardGrid}>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};
export default ProductsGridHome;
