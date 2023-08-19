import React from "react";
import products from "./products";
import Product from "./components/Product/Product";
import Image from "next/image";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h1>Zizi's Teashop</h1>

        <div>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
          {/* <Image src="/images/airpods.jpg" alt="airpods" /> */}
        </div>
      </div>
    </main>
  );
};
export default Home;
