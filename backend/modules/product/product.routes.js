import { Router } from "express";
import { createProduct, getProducts } from "./product.controller.js";
import upload from "../../middleware/upload.js";

const router = Router();

router.post("/", upload.single("image"), createProduct);
router.get("/", getProducts);

export default router;