import { FC } from "react";
import styles from "./product.module.scss";
import Link from "next/link";
import Image from "next/image";
import Rating from "../Rating/Rating";

export interface ProductType {
  _id: string;
  name: string;
  image: string[];
  description: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

export interface ProductProps {
  product: ProductType;
}

const Product: FC<ProductProps> = ({ product }) => {
  const image = product.image[0];
  return (
    <article className={styles.card}>
      <Link href={`/product/${product._id}`}>
        <div className={styles.cardImage}>
          <Image
            src={image}
            alt="Product Image"
            fill={true}
            placeholder="blur"
            blurDataURL={image}
            style={{ objectFit: "contain" }}
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
      </Link>
    </article>
  );
};
export default Product;
