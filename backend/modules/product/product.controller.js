// modules/product/product.controller.js
import {
  createProductService,
  getProductsService
} from "./product.service.js";

export const createProduct = async (req, res, next) => {
  try {
    // req comes here ✅
    const product = await createProductService(req.body);

    // res goes from here ✅
    res.status(201).json({
      success: true,
      data: product
    });

  } catch (error) {
    next(error);
  }
};

export const getProducts = async (req, res, next) => {
  try {
    const products = await getProductsService(req.query);

    res.json({
      success: true,
      results: products.length,
      data: products
    });

  } catch (error) {
    next(error);
  }
};