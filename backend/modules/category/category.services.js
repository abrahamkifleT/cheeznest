import Category from "./category.model.js";

export const createCategoryService = async (data) => {
    return await Category.create(data);
}

export const getAllCategoriesService = async () => {
    return await Category.find().populate("parent", "name slug");
}

export const getCategoryByIdService = async (id) => {
    return await Category.findById(id).populate("parent", "name slug");
}

export const updateCategoryService = async (id, data) => {
    return await Category.findByIdAndUpdate(id, data, { new: true });
}

export const deleteCategoryService = async (id) => {
    return await Category.findByIdAndDelete(id);
}
