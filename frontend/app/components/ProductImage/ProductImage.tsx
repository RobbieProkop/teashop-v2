"use client";

import Image from "next/image";
import { FC, useState } from "react";
import styles from "./productImage.module.scss";
import { ProductProps } from "../Product/Product";

const ProductImage: FC<ProductProps> = ({ product }) => {
  const [thumbnail, setThumbnail] = useState(product.image[0]);
  return (
    <div className={styles.imagesContainer}>
      <div className={styles.subImagesContainer}>
        {product.image.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`${product.name} ${index + 1}`}
            placeholder="blur"
            blurDataURL={image[0]}
            className={
              thumbnail === image
                ? `${styles.thumbnail} ${styles.thumbnailActive}`
                : styles.thumbnail
            }
            width={100}
            height={80}
            onClick={() => {
              setThumbnail(image);
            }}
          />
        ))}
      </div>
      <div className={styles.image}>
        <Image
          src={thumbnail}
          alt="Thumbnail Image of Product"
          fill={true}
          placeholder="blur"
          blurDataURL={thumbnail}
          className={styles.mainImage}
        />
      </div>
    </div>
  );
};
export default ProductImage;
