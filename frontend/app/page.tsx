import React from "react";
import products from "./products";
import Product from "./components/Product/Product";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h1>Zizi's Teashop</h1>

        <div>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};
export default Home;
