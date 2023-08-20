import products from "../../products";
import styles from "./productPage.module.scss";
import Link from "next/link";
import Image from "next/image";
import Rating from "../../components/Rating/Rating";

interface ProductPageProps {
  params: { id: string };
}

const productPage = ({ params }: ProductPageProps) => {
  const product = products.find((p) => p._id === params.id);
  if (!product) return <div>Product Not Found</div>;
  return (
    <main className={`main  ${styles.productPage}`}>
      <div className="container">
        <Link href="/" className={`btn btn-light ${styles.back}`}>
          <button>Go Back</button>
        </Link>
        <div className={styles.flex}>
          <div className={styles.image}>
            <Image
              src={product.image}
              alt="Product Image"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.info}>
            <h3>{product.name}</h3>
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
            <h4>Price ${product.price}</h4>
          </div>
          <div className={styles.card}>
            <div className={styles.item}>
              <p>Price:</p>
              <p>
                <strong>${product.price}</strong>
              </p>
            </div>
            <div className={styles.item}>
              <p>Status:</p>
              <p>
                <strong>${product.countInStock}</strong>
              </p>
            </div>
            <div className={styles.item}>
              <button className="btn btn-add">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default productPage;
