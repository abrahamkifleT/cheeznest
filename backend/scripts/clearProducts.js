import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../modules/product/product.modle.js';

dotenv.config();

const clearProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected...');

    const result = await Product.deleteMany({});
    console.log(`Success: Removed ${result.deletedCount} products from the database.`);

    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error clearing products:', error);
    process.exit(1);
  }
};

clearProducts();
