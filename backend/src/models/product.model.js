import mongoose from "mongoose";
const productScheme = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    about: {
      category: {
        type: String,
        required: true,
      },
      description: {
        Type: String,
      },
      features: {
        type: [String],
        validate: {
          validator: function (val) {
            return val.length <= 5;
          },
          message: "You can add up to 5 features Only",
        },
      },
      technologies: {
        type: [String],
        validate: {
          validator: function (val) {
            return val.length <= 8;
          },
          message: "You can add up to 8 technologies only",
        },
      },
      rating: {
        type: Number,
      },
      review: {
        type: Number,
      },
      author: {
        type: String,
      },
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const productModel = mongoose.model("product", productScheme);
export default productModel;Number
