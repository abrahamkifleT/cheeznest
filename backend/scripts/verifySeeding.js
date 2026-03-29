import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../modules/product/product.modle.js';
import Category from '../modules/category/category.model.js';

dotenv.config();

const verify = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const products = await Product.find().populate('category');
  console.log(`Found ${products.length} products in DB.`);
  products.slice(0, 3).forEach(p => {
    console.log(`- ${p.name} | Category: ${p.category?.name} | Image: ${p.image}`);
  });
  mongoose.connection.close();
};

verify();
