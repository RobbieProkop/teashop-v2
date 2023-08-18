import React from "react";
import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/other">Other</Link>
    </div>
  );
};
export default Header;
