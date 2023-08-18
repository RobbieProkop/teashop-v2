import React from "react";
import Link from "next/link";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/other" className={styles.blue}>
        Other
      </Link>
    </div>
  );
};
export default Footer;
