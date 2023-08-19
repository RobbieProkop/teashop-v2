import styles from "./productPage.module.scss";

interface ProductPageProps {
  params: { id: string };
  searchParams: URLSearchParams;
}

const productPage = ({ params, searchParams }: ProductPageProps) => {
  return (
    <div className={styles.productPage}>
      <h1>{params.id}</h1>
    </div>
  );
};
export default productPage;
