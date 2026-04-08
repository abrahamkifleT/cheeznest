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
    
    // We'll map local filenames to product details
    const productData = [
      { name: 'Classic Margherita', categories: ['Classic Pizza'], img: 'imgi_24_image-2-1.webp', price: 12.99, desc: 'Fresh tomato sauce, mozzarella, and basil leaf.' },
      { name: 'Meat Lover Pizza', categories: ['Meat Lovers Pizza', 'Popular'], img: 'imgi_12_image-1-2.webp', price: 15.99, desc: 'Heaped with pepperoni, Italian sausage, and bacon.' },
      { name: 'Garden Veggie', categories: ['Vegetarian Pizza', 'Healthy'], img: 'imgi_11_image-12-1-1.webp', price: 13.50, desc: 'Bell peppers, red onions, mushrooms, and olives.' },
      { name: 'Crispy Fries', categories: ['Fries', 'Sides'], img: 'imgi_26_image-4-1.webp', price: 4.99, desc: 'Golden brown, lightly salted crispy French fries.' },
      { name: 'Spicy Chicken Wings', categories: ['Chicken Wings', 'Starters'], img: 'imgi_14_63890fc77a2bf7710450646b_image-9-menu-pizzaplanet-template-p-800-1.webp', price: 9.99, desc: 'Tender wings tossed in hot buffalo sauce.' },
      { name: 'Garlic Breadsticks', categories: ['Garlic Bread', 'Sides'], img: 'imgi_27_image-5-1.webp', price: 5.99, desc: 'Freshly baked with roasted garlic and herbs.' },
      { name: 'Fresh Ceasar Salad', categories: ['Salad', 'Healthy'], img: 'imgi_28_image-6-2.webp', price: 7.99, desc: 'Crisp romaine with parmesan and crunchy croutons.' },
      { name: 'Double Chocolate Cake', categories: ['Cake', 'Dessert'], img: 'imgi_18_63890ff24c9e7491bf105aec_image-12-menu-pizzaplanet-template-p-800-2.webp', price: 6.50, desc: 'Rich, moist chocolate cake with dark chocolate ganache.' },
      { name: 'Vanilla Bean Ice Cream', categories: ['Ice Cream', 'Dessert'], img: 'imgi_49_6389103ab64a2353ca775a88_image-16-menu-pizzaplanet-template-p-800-1-150x150.webp', price: 3.99, desc: 'Real vanilla bean churned for a smooth texture.' },
      { name: 'Cold Brew Coffee', categories: ['Coffee', 'Drinks'], img: 'imgi_8_image-1-1.webp', price: 4.50, desc: 'Steeped for 12 hours, smooth and caffeine-rich.' },
      { name: 'Orange Juice', categories: ['Juice', 'Drinks'], img: 'imgi_9_Group-1000012600-1.webp', price: 3.50, desc: 'Freshly squeezed oranges with a pulp-free finish.' },
      { name: 'Four Cheese Special', categories: ['Specialty Pizza', 'Popular'], img: 'imgi_25_image-3-1.webp', price: 14.99, desc: 'Mozzarella, parmesan, ricotta, and cheddar blend.' }
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
