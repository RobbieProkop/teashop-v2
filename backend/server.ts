import express from "express";
import products from "./data/products.ts";
const PORT = 8080;

const app = express();

app.get("/", (req, res) => {
  console.log("Hello From Server");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
