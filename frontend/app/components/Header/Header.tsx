import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";

import user from "public/icons/user.png";
import cart from "public/icons/cart.png";
import tea from "public/icons/tea.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.flexBetween}>
          <Link className={styles.link} href="/">
            <Image src={tea} alt="cart Icon" className={styles.logo} />
            Zizi's Teashop
          </Link>
          <div>
            <Link className={styles.link} href="/cart">
              <Image src={cart} alt="cart Icon" className={styles.icon} />
              Cart
            </Link>
            <Link className={styles.link} href="/login">
              <Image src={user} alt="user Icon" className={styles.icon} />
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
