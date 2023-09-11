import styles from "../styles/grid.module.scss";
import { useState, useEffect } from "react";
import Product, { ProductType } from "../components/Product/Product";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      <div className={styles.cardGrid}>
        {products.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
    </>
  );
};

export default HomePage;
