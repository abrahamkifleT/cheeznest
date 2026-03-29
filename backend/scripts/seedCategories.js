import mongoose from "mongoose";
import dotenv from "dotenv";
import Category from "../modules/category/category.model.js";

dotenv.config();

const parentCategoryNames = [
  "Pizza", "Main Dishes", "Side Dishes", "Desserts", "Drinks", "PDF Book", "Uncategorized"
];

const subcategoryMap = {
  "Pizza": ["Classic Pizza", "Specialty Pizza", "Vegetarian Pizza", "Meat Lovers Pizza", "Spicy Pizza"],
  "Side Dishes": ["Fries", "Chicken Wings", "Garlic Bread", "Salad"],
  "Desserts": ["Ice Cream", "Cake", "Brownies"],
  "Drinks": ["Soft Drinks", "Juice", "Coffee"]
};

const makeSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const seedCategories = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected for Category seeding...");

        await Category.deleteMany();
        console.log("Existing categories cleared.");

        // Insert parents
        const parentDocs = parentCategoryNames.map(name => ({
            name,
            slug: makeSlug(name),
            parent: null
        }));

        const insertedParents = await Category.insertMany(parentDocs);
        console.log(`Seeded ${insertedParents.length} Core Food Categories.`);

        // Insert children
        const childrenDocs = [];
        for (const [parentName, children] of Object.entries(subcategoryMap)) {
            const parent = insertedParents.find(p => p.name === parentName);
            if (parent) {
                children.forEach(childName => {
                    childrenDocs.push({
                        name: childName,
                        slug: makeSlug(childName),
                        parent: parent._id
                    });
                });
            }
        }

        const insertedChildren = await Category.insertMany(childrenDocs);
        console.log(`Seeded ${insertedChildren.length} Sub-Categories.`);

        process.exit(0);
    } catch (err) {
        console.error("Failed seeding categories:", err);
        process.exit(1);
    }
};

seedCategories();
