import styles from "../styles/grid.module.scss";
import Product, { ProductType } from "../components/Product/Product";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Spinner from "../components/Spinner/Spinner";
import Message from "../components/Message/Message";

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  if (error) {
    if ("status" in error) {
      const errMsg =
        "error" in error ? error.error : JSON.stringify(error.data);
      return <Message variant="danger" text={errMsg} />;
    }
  }
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <h1>Zizi's Teashop</h1>
          <div className={styles.cardGrid}>
            {products &&
              products.map((product: ProductType) => {
                return <Product key={product._id} product={product} />;
              })}
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
