import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
dotenv.config();
import connectDB from "./config/db.js";

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

//Routes
app.get("/", (req, res) => {
  console.log("Hello From Server");
  res.json({ message: "Hello From Server" });
});
app.use("/api/products", productRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
