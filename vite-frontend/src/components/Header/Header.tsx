import { FC } from "react";
import styles from "./header.module.scss";
import { Link } from "react-router-dom";
import user from "/icons/user.png";
import cart from "/icons/cart.png";
import tea from "/icons/tea.png";
import { useSelector } from "react-redux";

const Header: FC = () => {
  const { cartItems } = useSelector((state: any) => state.cart);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.flexBetween}>
          <Link className={styles.link} to="/">
            <img
              src={tea}
              alt="cart Icon"
              className={styles.logo}
              loading="lazy"
            />
            Zizi's Teashop
          </Link>
          <div>
            <Link className={styles.link} to="/cart">
              <img
                src={cart}
                alt="cart Icon"
                className={styles.icon}
                loading="lazy"
              />
              {cartItems.length > 0 && cartItems.length} Cart
            </Link>
            <Link className={styles.link} to="/login">
              <img
                src={user}
                alt="user Icon"
                className={styles.icon}
                loading="lazy"
              />
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
