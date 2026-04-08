import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import Product from '../modules/product/product.modle.js'; // Still with the typo
import Category from '../modules/category/category.model.js';
import { uploadToCloudinary } from '../utils/cloudinary.js';

dotenv.config();

/**
 * Bulk product seeding from local directory to Cloudinary and MongoDB.
 */
const bulkSeedProducts = async () => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for bulk seeding...');

    // 2. Fetch all categories to reference them
    const categories = await Category.find();
    if (categories.length === 0) {
      console.error('No categories found. Please seed categories first.');
      process.exit(1);
    }

    const findCategory = (name) => categories.find(c => c.name === name)?._id || categories[0]._id;

    // 3. Define the products with their local image paths
    const assetPath = 'E:/development/cheeznest/frontend/src/assets/website';
    
    // Freshly curated product list with multiple categories
    const productData = [
      { 
        name: 'Cheesy Volcano Pizza', 
        categories: ['Specialty Pizza', 'Spicy Pizza', 'Popular'], 
        img: 'imgi_79_cheese-pizza-with-chilli-and-basil-2024-09-24-10-35-03-utc-1.webp', 
        price: 18.99, 
        desc: 'Spicy chili, fresh basil, and a volcano of melted mozzarella.' 
      },
      { 
        name: 'Chef Garden Special', 
        categories: ['Vegetarian Pizza', 'Healthy', 'Main Dishes'], 
        img: 'imgi_74_young-woman-in-a-gray-aprong-prepares-a-vegetarian-2023-11-27-05-08-07-utc-1.webp', 
        price: 16.50, 
        desc: 'Hand-picked organic veggies prepared by our master chef.' 
      },
      { 
        name: 'Wood-Fired Classic', 
        categories: ['Classic Pizza', 'Main Dishes'], 
        img: 'imgi_69_pizza-placed-on-a-wooden-plate-2023-11-27-05-17-07-utc-1.webp', 
        price: 14.99, 
        desc: 'Traditional pizza baked in an authentic wood-fired oven.' 
      },
      { 
        name: 'Friends Party Combo', 
        categories: ['Specialty Pizza', 'Side Dishes', 'Popular'], 
        img: 'imgi_64_friends-eating-pizza-and-having-drinks-2024-04-08-20-30-36-utc-1.webp', 
        price: 34.99, 
        desc: 'The ultimate sharing platter for your next group hangout.' 
      },
      { 
        name: 'Premium Margherita', 
        categories: ['Classic Pizza', 'Popular'], 
        img: 'imgi_24_image-2-1.webp', 
        price: 13.99, 
        desc: 'Our signature Margherita with premium buffalo mozzarella.' 
      },
      { 
        name: 'Garlic Herb Twists', 
        categories: ['Garlic Bread', 'Side Dishes'], 
        img: 'imgi_27_image-5-1.webp', 
        price: 6.99, 
        desc: 'Fluffy dough twisted with roasted garlic and fresh herbs.' 
      },
      { 
        name: 'Double Fudge Brownie', 
        categories: ['Brownies', 'Desserts'], 
        img: 'imgi_18_63890ff24c9e7491bf105aec_image-12-menu-pizzaplanet-template-p-800-2.webp', 
        price: 5.50, 
        desc: 'Triple chocolate fudge brownies served warm.' 
      }
    ];

    console.log(`Starting bulk upload of ${productData.length} products to Cloudinary...`);

    // 4. Wipe existing products if needed
    await Product.deleteMany();

    const seededProducts = [];

    for (const item of productData) {
      const fullImagePath = path.join(assetPath, item.img);

      // Verify file exists
      if (!fs.existsSync(fullImagePath)) {
        console.warn(`Warning: Image not found at ${fullImagePath}. Skipping ${item.name}.`);
        continue;
      }

      console.log(`Uploading ${item.img} for ${item.name}...`);
      
      // Upload to Cloudinary
      const cloudinaryUrl = await uploadToCloudinary(fullImagePath, 'cheeznest_assets');

      // Create Product object
      const product = {
        name: item.name,
        slug: item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        description: item.desc,
        price: item.price,
        categories: item.categories.map(catName => findCategory(catName)),
        image: cloudinaryUrl,
        isFeatured: Math.random() > 0.5,
        stock: Math.floor(Math.random() * 50) + 10,
      };

      seededProducts.push(product);
    }

    // 5. Bulk insert to MongoDB
    const result = await Product.insertMany(seededProducts);
    console.log(`Success! ${result.length} products seeded with Cloudinary URLs.`);

    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Bulk Seeding Failed:', error);
    process.exit(1);
  }
};

bulkSeedProducts();
