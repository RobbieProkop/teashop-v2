import styles from "./message.module.scss";

interface MessageProps {
  variant?: string;
  text: string;
}

const Message = ({ variant, text }: MessageProps) => {
  let variantClass;
  switch (variant) {
    case "success":
      variantClass = styles.success;
      break;
    case "danger":
      variantClass = styles.danger;
      break;
    case "info":
      variantClass = styles.info;
      break;
    default:
      variantClass = styles.info;
      break;
  }
  return (
    <div className={`${styles.alertContainer} ${variantClass}`}>
      <h2>{text}</h2>
    </div>
  );
};
export default Message;
