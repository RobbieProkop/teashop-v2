import React from "react";

import ProductsGridHome from "./components/ProductsGridHome/Product";

const Home = () => {
  return (
    <main className="main">
      <div className="container">
        <h1>Zizi's Teashop</h1>

        <ProductsGridHome />
      </div>
    </main>
  );
};
export default Home;
