import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRoutes from "./modules/product/product.routes.js";
import categoryRoutes from "./modules/category/category.routes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// connect to DB
connectDB();

// middleware
app.use(cors());
app.use(express.json());


// routes
app.use("/api/product", productRoutes)
app.use("/api/category", categoryRoutes)

// server start
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})