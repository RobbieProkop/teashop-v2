import express from "express";
import { ProductType } from "../types.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = Product.findById(req.params.id);
    res.json(product);
  })
);
export default router;
