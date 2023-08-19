import styles from "./rating.module.scss";
import Image from "next/image";
const star = "/images/star.png";
const halfStar = "/images/half-star.png";
const emptyStar = "/images/empty-star.png";

interface RatingProps {
  value: number;
  text: string;
}

const Rating = ({ value, text }: RatingProps) => {
  return (
    <div className={styles.rating}>
      <span>
        {value >= 1 ? (
          <Image src={star} alt="start icon" width={48} height={48} />
        ) : value >= 0.5 ? (
          <Image src={halfStar} alt="start icon" width={48} height={48} />
        ) : (
          <Image src={emptyStar} alt="start icon" width={48} height={48} />
        )}
      </span>
    </div>
  );
};
export default Rating;
