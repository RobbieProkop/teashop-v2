import { FC } from "react";
import styles from "./product.module.scss";
import Rating from "../Rating/Rating";
import { ProductType } from "../../states";

export interface ProductProps {
  product: ProductType;
}

const Product: FC<ProductProps> = ({ product }) => {
  const image = product.image[0];
  return (
    <article className={styles.card}>
      <a href={`/product/${product._id}`}>
        <div className={styles.cardImage}>
          <img
            src={image}
            alt="Product Image"
            // fill={true}
            // placeholder="blur"
            // blurDataURL={image}
            // style={{ objectFit: "contain" }}
            loading="lazy"
          />
        </div>
        <div className={styles.cardBody}>
          <h2 className={styles.productTitle}>
            <strong>{product.name}</strong>
          </h2>
          <h3>${product.price}</h3>

          <Rating
            value={product.rating}
            id={product._id}
            text={`${product.numReviews} reviews`}
          />
        </div>
      </a>
    </article>
  );
};
export default Product;
