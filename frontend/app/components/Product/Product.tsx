import React from "react";
import styles from "./product.module.scss";
import Link from "next/link";
import Image from "next/image";
import Rating from "../Rating/Rating";

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
  const image = product.image;
  return (
    <article className={styles.card}>
      <Link href={`/product/${product._id}`} className={styles.cardImage}>
        <Image
          src={image}
          alt="Product Image"
          fill={true}
          placeholder="blur"
          blurDataURL={image}
          objectFit="contain"
        />
      </Link>
      <div className={styles.cardBody}>
        <Link href={`/product/${product._id}`}>
          <h2>
            <strong>{product.name}</strong>
          </h2>
          <h3>${product.price}</h3>
        </Link>
        <Rating value={product.rating} text="Great" />
      </div>
    </article>
  );
};
export default Product;
