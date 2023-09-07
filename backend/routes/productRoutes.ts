import express from "express";
import { ProductType } from "../types.js";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;
