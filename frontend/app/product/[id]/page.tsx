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

  const productInStock = product.countInStock > 0 ? true : false;

  const inStockArray = Array.from(
    { length: product.countInStock },
    (_, i) => i + 1
  );

  const buttonClasses = productInStock ? "btn btn-add" : "btn btn-disabled";
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

          <div>
            <div className={styles.card}>
              <div className={styles.item}>
                <p>Price:</p>
                <p>
                  <strong>${product.price}</strong>
                </p>
              </div>
              <div className={styles.item}>
                <p>Status:</p>
                <p>{productInStock ? "In Stock" : "Out of Stock"}</p>
              </div>
              {productInStock && (
                <div className={styles.item}>
                  <p className={styles.col}>Qty:</p>
                  <div className={styles.select}>
                    <select name="qty" id="qty">
                      {inStockArray.map((x) => (
                        <option key={x} value={x}>
                          {x}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              <div className={styles.add}>
                <button className={buttonClasses} disabled={!productInStock}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default productPage;
