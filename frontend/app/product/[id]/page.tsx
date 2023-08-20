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

  const productInStock = product.countInStock > 0 ? "In Stock" : "Out of Stock";
  return (
    <main className={`main  ${styles.productPage}`}>
      <div className="container">
        <Link href="/" className={styles.back}>
          <button className={`btn ${styles.btnLight}`}>Go Back</button>
        </Link>
        <div className={styles.flex}>
          <div className={styles.image}>
            <Image
              src={product.image}
              alt="Product Image"
              fill={true}
              placeholder="blur"
              blurDataURL={product.image}
            />
          </div>
          <div className={styles.info}>
            <h3>{product.name}</h3>
            <div className={styles.rating}>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>
            <h4>Price ${product.price}</h4>
            <p>{product.description}</p>
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
              <p>{productInStock}</p>
            </div>
            <div className={styles.item}>
              <p>Qty:</p>
              <select name="qty" id="qty">
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
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
