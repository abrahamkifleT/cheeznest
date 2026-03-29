import express from "express";
import productRoutes from "./modules/product/product.routes.js";

const app = express();
const PORT = 5000;

// middleware

app.use(express.json())


// routes
app.use("/api/product", productRoutes)

// server start
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})