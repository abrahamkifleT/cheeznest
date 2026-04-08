import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../modules/product/product.modle.js";

dotenv.config();

const images = [
  "imgi_24_image-2-1.webp",
  "imgi_25_image-3-1.webp",
  "imgi_26_image-4-1.webp",
  "imgi_27_image-5-1.webp",
  "imgi_28_image-6-2.webp",
  "imgi_9_Group-1000012600-1.webp",
  "imgi_8_image-1-1.webp",
  "imgi_12_image-1-2.webp",
  "imgi_11_image-12-1-1.webp",
  "imgi_14_63890fc77a2bf7710450646b_image-9-menu-pizzaplanet-template-p-800-1.webp",
  "imgi_18_63890ff24c9e7491bf105aec_image-12-menu-pizzaplanet-template-p-800-2.webp",
  "imgi_49_6389103ab64a2353ca775a88_image-16-menu-pizzaplanet-template-p-800-1-150x150.webp"
];

const mockCategory = new mongoose.Types.ObjectId();

const products = [
  { 
    name: "Classic Margherita", 
    slug: "classic-margherita",
    description: "Tomato sauce, mozzarella, and fresh basil.", 
    price: 12.99, 
    discountPrice: 10.99,
    categories: [mockCategory],
    image: images[0], 
    images: [],
    isFeatured: true,
    stock: 100,
    ratingsAverage: 4.8,
    ratingsQuantity: 34
  },
  { 
    name: "Pepperoni Feast", 
    slug: "pepperoni-feast",
    description: "Loaded with pepperoni and extra cheese.", 
    price: 14.99, 
    discountPrice: 12.99,
    categories: [mockCategory],
    image: images[1], 
    images: [],
    isFeatured: true,
    stock: 80,
    ratingsAverage: 4.9,
    ratingsQuantity: 156
  },
  { 
    name: "BBQ Chicken", 
    slug: "bbq-chicken",
    description: "Grilled chicken, BBQ sauce, onions, and cilantro.", 
    price: 16.99, 
    discountPrice: 15.49,
    categories: [mockCategory],
    image: images[2], 
    images: [],
    isFeatured: false,
    stock: 60,
    ratingsAverage: 4.5,
    ratingsQuantity: 42
  },
  { 
    name: "Veggie Supreme", 
    slug: "veggie-supreme",
    description: "Bell peppers, mushrooms, onions, and black olives.", 
    price: 13.99, 
    discountPrice: 11.99,
    categories: [mockCategory],
    image: images[3], 
    images: [],
    isFeatured: false,
    stock: 120,
    ratingsAverage: 4.2,
    ratingsQuantity: 28
  },
  { 
    name: "Four Cheese", 
    slug: "four-cheese",
    description: "A rich blend of mozzarella, cheddar, parmesan, and provolone.", 
    price: 15.99, 
    discountPrice: 14.99,
    categories: [mockCategory],
    image: images[4], 
    images: [],
    isFeatured: true,
    stock: 90,
    ratingsAverage: 4.7,
    ratingsQuantity: 88
  },
  { 
    name: "Meat Lover's", 
    slug: "meat-lovers",
    description: "Pepperoni, sausage, bacon, and ham.", 
    price: 17.99, 
    discountPrice: 16.49,
    categories: [mockCategory],
    image: images[5], 
    images: [],
    isFeatured: false,
    stock: 75,
    ratingsAverage: 4.6,
    ratingsQuantity: 112
  },
  { 
    name: "Hawaiian Bliss", 
    slug: "hawaiian-bliss",
    description: "Ham and sweet pineapple chunks.", 
    price: 14.49, 
    discountPrice: 13.49,
    categories: [mockCategory],
    image: images[6], 
    images: [],
    isFeatured: false,
    stock: 150,
    ratingsAverage: 4.1,
    ratingsQuantity: 65
  },
  { 
    name: "Mushroom Truffle", 
    slug: "mushroom-truffle",
    description: "Wild mushrooms with a drizzle of truffle oil.", 
    price: 16.49, 
    discountPrice: 15.99,
    categories: [mockCategory],
    image: images[7], 
    images: [],
    isFeatured: true,
    stock: 40,
    ratingsAverage: 4.9,
    ratingsQuantity: 310
  },
  { 
    name: "Buffalo Chicken", 
    slug: "buffalo-chicken",
    description: "Spicy buffalo chicken with a ranch drizzle.", 
    price: 15.49, 
    discountPrice: 14.49,
    categories: [mockCategory],
    image: images[8], 
    images: [],
    isFeatured: false,
    stock: 85,
    ratingsAverage: 4.4,
    ratingsQuantity: 76
  },
  { 
    name: "Garlic Parmesan Bites", 
    slug: "garlic-parmesan-bites",
    description: "Oven-baked bites tossed in garlic and parmesan.", 
    price: 8.99, 
    discountPrice: 7.99,
    categories: [mockCategory],
    image: images[9], 
    images: [],
    isFeatured: false,
    stock: 200,
    ratingsAverage: 4.0,
    ratingsQuantity: 15
  },
  { 
    name: "Cheesy Breadsticks", 
    slug: "cheesy-breadsticks",
    description: "Warm breadsticks stuffed with melted cheese.", 
    price: 7.99, 
    discountPrice: 6.99,
    categories: [mockCategory],
    image: images[10], 
    images: [],
    isFeatured: false,
    stock: 180,
    ratingsAverage: 4.3,
    ratingsQuantity: 22
  },
  { 
    name: "Caesar Salad", 
    slug: "caesar-salad",
    description: "Crisp romaine, parmesan, croutons, and Caesar dressing.", 
    price: 9.99, 
    discountPrice: 8.49,
    categories: [mockCategory],
    image: images[11], 
    images: [],
    isFeatured: true,
    stock: 120,
    ratingsAverage: 4.5,
    ratingsQuantity: 58
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected for seeding...");

    await Product.deleteMany(); // clear existing products
    console.log("Existing products cleared.");

    await Product.insertMany(products);
    console.log("12 dummy products seeded successfully!");

    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
  }
};

seedDB();
