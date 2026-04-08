import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../modules/product/product.modle.js';
import Category from '../modules/category/category.model.js';

dotenv.config();

const verify = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  const products = await Product.find().populate('categories');
  console.log(`Found ${products.length} products in DB.`);
  products.slice(0, 3).forEach(p => {
    const categoryNames = p.categories?.map(c => c.name).join(', ') || 'None';
    console.log(`- ${p.name} | Categories: ${categoryNames} | Image: ${p.image}`);
  });
  mongoose.connection.close();
};

verify();
