import express from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";
dotenv.config();
import connectDB from "./config/db.js";

connectDB();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

//Routes
app.get("/", (req, res) => {
  console.log("Hello From Server");
  res.json({ message: "Hello From Server" });
});
app.use("/api/products", productRoutes);

//error handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
