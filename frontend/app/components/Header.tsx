import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/other">Other</Link>
    </div>
  );
};
export default Header;
