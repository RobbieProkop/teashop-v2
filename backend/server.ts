import express from "express";
import products from "./data/products.js";
const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  console.log("Hello From Server");
  res.json({ message: "Hello From Server" });
});

app.get("/api/products", (req, res) => {
  console.log("products");
  res.json(products);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
