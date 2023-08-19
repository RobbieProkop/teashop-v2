import React from "react";
import styles from "./product.module.scss";
import Link from "next/link";
import Image from "next/image";

interface ProductProps {
  product: {
    _id: string;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
  };
}

const Product = ({ product }: ProductProps) => {
  return (
    <article className={styles.card}>
      <Link href={`/product/${product._id}`} className={styles.cardImage}>
        <Image
          src={product.image}
          alt="Product Image"
          layout="fill"
          objectFit="contain"
        />
      </Link>
      <div className={styles.cardBody}>
        <Link href={`/product/${product._id}`}>
          <h2>
            <strong>{product.name}</strong>
          </h2>
        </Link>
        <h3>${product.price}</h3>
      </div>
    </article>
  );
};
export default Product;
