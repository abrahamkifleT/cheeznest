import product from "./product.modle.js";

export const createProductService = async (data) => {
    if(data.price <= 0){
        throw new Error("Price must be greater than 0")
    }
    const product = await product.create(data)
    return product
}

export const getAllProductsService = async () => {
    const products = await product.find()
    return products
}

export const getProductByIdService = async (id) => {
    const product = await product.findById(id)
    return product
}

export const updateProductService = async (id, data) => {
    const product = await product.findByIdAndUpdate(id, data, { new: true })
    return product
}

export const deleteProductService = async (id) => {
    const product = await product.findByIdAndDelete(id)
    return product
}
