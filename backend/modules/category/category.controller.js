import {
  createCategoryService,
  getAllCategoriesService
} from "./category.services.js";

export const createCategory = async (req, res, next) => {
  try {
    const category = await createCategoryService(req.body);

    res.status(201).json({
      success: true,
      data: category
    });
  } catch (error) {
    next(error);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const categories = await getAllCategoriesService();

    res.status(200).json({
      success: true,
      results: categories.length,
      data: categories
    });
  } catch (error) {
    next(error);
  }
};
