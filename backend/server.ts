import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import { ProductType } from "./types.js";
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

//Routes
app.get("/", (req, res) => {
  console.log("Hello From Server");
  res.json({ message: "Hello From Server" });
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p: ProductType) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
