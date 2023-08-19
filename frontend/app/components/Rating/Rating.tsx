import styles from "./rating.module.scss";
import Image from "next/image";
const star = "/icons/star.png";
const halfStar = "/icons/half-star.png";
const emptyStar = "/icons/empty-star.png";

interface RatingProps {
  value: number;
  text?: string;
}

const Rating = ({ value, text }: RatingProps) => {
  return (
    <div className={styles.rating}>
      <span className={styles.star}>
        {value >= 1 ? (
          <Image src={star} alt="start icon" width={32} height={32} />
        ) : value >= 0.5 ? (
          <Image src={halfStar} alt="start icon" width={32} height={32} />
        ) : (
          <Image src={emptyStar} alt="start icon" width={32} height={32} />
        )}
      </span>
      <span className={styles.star}>
        {value >= 2 ? (
          <Image src={star} alt="start icon" width={32} height={32} />
        ) : value >= 1.5 ? (
          <Image src={halfStar} alt="start icon" width={32} height={32} />
        ) : (
          <Image src={emptyStar} alt="start icon" width={32} height={32} />
        )}
      </span>
      <span className={styles.star}>
        {value >= 3 ? (
          <Image src={star} alt="start icon" width={32} height={32} />
        ) : value >= 2.5 ? (
          <Image src={halfStar} alt="start icon" width={32} height={32} />
        ) : (
          <Image src={emptyStar} alt="start icon" width={32} height={32} />
        )}
      </span>
      <span className={styles.star}>
        {value >= 4 ? (
          <Image src={star} alt="start icon" width={32} height={32} />
        ) : value >= 3.5 ? (
          <Image src={halfStar} alt="start icon" width={32} height={32} />
        ) : (
          <Image src={emptyStar} alt="start icon" width={32} height={32} />
        )}
      </span>
      <span className={styles.star}>
        {value >= 5 ? (
          <Image src={star} alt="start icon" width={32} height={32} />
        ) : value >= 4.5 ? (
          <Image src={halfStar} alt="start icon" width={32} height={32} />
        ) : (
          <Image src={emptyStar} alt="start icon" width={32} height={32} />
        )}
      </span>

      <span className={styles.ratingText}>{text && text}</span>
    </div>
  );
};
export default Rating;
