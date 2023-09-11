import styles from "./rating.module.scss";
const star = "/icons/star.png";
const halfStar = "/icons/half-star.png";
const emptyStar = "/icons/empty-star.png";

interface RatingProps {
  value: number;
  id: string;
  text?: string;
}

const Rating = ({ value, id, text }: RatingProps) => {
  return (
    <div className={styles.rating}>
      <span className={styles.star}>
        {value >= 1 ? (
          <img src={star} alt="start icon" loading="lazy" />
        ) : value >= 0.5 ? (
          <img src={halfStar} alt="start icon" loading="lazy" />
        ) : (
          <img src={emptyStar} alt="start icon" loading="lazy" />
        )}
      </span>
      <span className={styles.star}>
        {value >= 2 ? (
          <img src={star} alt="start icon" loading="lazy" />
        ) : value >= 1.5 ? (
          <img src={halfStar} alt="start icon" loading="lazy" />
        ) : (
          <img src={emptyStar} alt="start icon" loading="lazy" />
        )}
      </span>
      <span className={styles.star}>
        {value >= 3 ? (
          <img src={star} alt="start icon" loading="lazy" />
        ) : value >= 2.5 ? (
          <img src={halfStar} alt="start icon" loading="lazy" />
        ) : (
          <img src={emptyStar} alt="start icon" loading="lazy" />
        )}
      </span>
      <span className={styles.star}>
        {value >= 4 ? (
          <img src={star} alt="start icon" loading="lazy" />
        ) : value >= 3.5 ? (
          <img src={halfStar} alt="start icon" loading="lazy" />
        ) : (
          <img src={emptyStar} alt="start icon" loading="lazy" />
        )}
      </span>
      <span className={styles.star}>
        {value >= 5 ? (
          <img src={star} alt="start icon" loading="lazy" />
        ) : value >= 4.5 ? (
          <img src={halfStar} alt="start icon" loading="lazy" />
        ) : (
          <img src={emptyStar} alt="start icon" loading="lazy" />
        )}
      </span>

      <span className={styles.ratingText}>{text && text}</span>
    </div>
  );
};
export default Rating;
