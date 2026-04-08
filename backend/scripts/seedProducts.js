import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../modules/product/product.modle.js";
import Category from "../modules/category/category.model.js";

dotenv.config();

const productsRaw = [
  {
    "name": "Guideline Book",
    "slug": "guideline-book",
    "description": "A comprehensive guide to the CheezNest flavors and recipes.",
    "price": 15,
    "discountPrice": null,
    "categoryNames": ["PDF Book"],
    "image": "https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/PIZZA_Guideline-1.webp",
    "images": ["https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/PIZZA_Guideline-1.webp"],
    "isFeatured": false,
    "stock": 100,
    "ratingsAverage": 5,
    "ratingsQuantity": 0
  },
  {
    "name": "Prosciutto Arugula",
    "slug": "prosciutto-arugula",
    "description": "Italian Prosciutto topped with fresh arugula and balsamic glaze.",
    "price": 50,
    "discountPrice": null,
    "categoryNames": ["Specialty Pizza", "Pizza"],
    "image": "https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/image-1-1.webp",
    "images": ["https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/image-1-1.webp"],
    "isFeatured": false,
    "stock": 100,
    "ratingsAverage": 5,
    "ratingsQuantity": 0
  },
  {
    "name": "Truffle Mushroom",
    "slug": "truffle-mushroom",
    "description": "Earthy mushrooms drizzled with exquisite truffle oil.",
    "price": 50,
    "discountPrice": null,
    "categoryNames": ["Specialty Pizza", "Vegetarian Pizza"],
    "image": "https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/banner-bg-03-new-1-2.webp",
    "images": ["https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/banner-bg-03-new-1-2.webp"],
    "isFeatured": false,
    "stock": 100,
    "ratingsAverage": 5,
    "ratingsQuantity": 0
  },
  {
    "name": "Capricorno",
    "slug": "capricorno",
    "description": "A classic blend of ham, mushrooms, artichokes, and olives.",
    "price": 50,
    "discountPrice": null,
    "categoryNames": ["Specialty Pizza", "Pizza"],
    "image": "https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/image-12-1-1.webp",
    "images": ["https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/image-12-1-1.webp"],
    "isFeatured": false,
    "stock": 100,
    "ratingsAverage": 5,
    "ratingsQuantity": 0
  },
  {
    "name": "Vesuvio",
    "slug": "vesuvio",
    "description": "Spicy pepperoni and chili peppers for a fiery kick.",
    "price": 50,
    "discountPrice": null,
    "categoryNames": ["Spicy Pizza", "Pizza"],
    "image": "https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/image-1-1.webp",
    "images": ["https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/image-1-1.webp"],
    "isFeatured": false,
    "stock": 100,
    "ratingsAverage": 5,
    "ratingsQuantity": 0
  },
  {
    "name": "European",
    "slug": "european",
    "description": "A delightful mix of cheeses and cured meats from across Europe.",
    "price": 45,
    "discountPrice": null,
    "categoryNames": ["Main Dishes", "Specialty Pizza"],
    "image": "https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/image-1-2.webp",
    "images": ["https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/image-1-2.webp"],
    "isFeatured": false,
    "stock": 100,
    "ratingsAverage": 5,
    "ratingsQuantity": 0
  },
  {
    "name": "Campania",
    "slug": "campania",
    "description": "Authentic flavors from the heart of Southern Italy.",
    "price": 50,
    "discountPrice": null,
    "categoryNames": ["Specialty Pizza", "Pizza"],
    "image": "https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/6389103ab64a2353ca775a88_image-16-menu-pizzaplanet-template-p-800-1.webp",
    "images": ["https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/6389103ab64a2353ca775a88_image-16-menu-pizzaplanet-template-p-800-1.webp"],
    "isFeatured": false,
    "stock": 100,
    "ratingsAverage": 5,
    "ratingsQuantity": 0
  },
  {
    "name": "Mediterrano",
    "slug": "mediterrano",
    "description": "A sun-kissed blend of olives, feta, and Mediterranean herbs.",
    "price": 55,
    "discountPrice": null,
    "categoryNames": ["Specialty Pizza", "Vegetarian Pizza"],
    "image": "https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/63890fc77a2bf7710450646b_image-9-menu-pizzaplanet-template-p-800-1.webp",
    "images": ["https://kitpapa.net/cheeznest/wp-content/uploads/2024/10/63890fc77a2bf7710450646b_image-9-menu-pizzaplanet-template-p-800-1.webp"],
    "isFeatured": false,
    "stock": 100,
    "ratingsAverage": 5,
    "ratingsQuantity": 0
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected for seeding...");

    // 1. Fetch categories to map names to IDs
    const categories = await Category.find();
    
    const products = productsRaw.map(p => {
      const categoryIds = p.categoryNames.map(name => {
        const cat = categories.find(c => c.name === name);
        return cat ? cat._id : null;
      }).filter(id => id !== null);

      // Default to first category if none found (to satisfy 'required' constraint)
      if (categoryIds.length === 0 && categories.length > 0) {
        categoryIds.push(categories[0]._id);
      }

      const { categoryNames, ...rest } = p;
      return { ...rest, categories: categoryIds };
    });

    // 2. Clear existing products
    await Product.deleteMany();
    console.log("Existing products cleared.");

    // 3. Insert new products
    await Product.insertMany(products);
    console.log(`${products.length} specific products seeded successfully!`);

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDB();
