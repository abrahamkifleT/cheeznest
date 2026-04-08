// modules/product/product.model.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true
    },

    slug: {
      type: String,
      lowercase: true
    },

    description: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true,
      min: [0, "Price cannot be negative"]
    },

    discountPrice: {
      type: Number,
      validate: {
        validator: function (value) {
          return value < this.price;
        },
        message: "Discount price must be less than price"
      }
    },

    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
      }
    ],

    image: {
      type: String,
      default: "/uploads/default.png"
    },

    images: [String],

    isFeatured: {
      type: Boolean,
      default: false
    },

    stock: {
      type: Number,
      default: 0
    },

    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: 1,
      max: 5
    },

    ratingsQuantity: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);