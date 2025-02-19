import productModel from "../models/product.model.js";
const productServices = {
  createProduct: async ({ productName, price, about = {"product": "123"}, imageUrl }) => {
    try {
      if (!productName || (!price && price!==0) || !imageUrl) {
        throw new Error(
          "Missing required fields: productName, price, about.category, or imageUrl."
        );
      }

      const product = new productModel({
        productName,
        price,
        about: {
          category: about.category,
          description: about.description,
          features: about.features,
          technologies: about.technologies,
          rating: about.rating,
          review: about.review,
          author: about.author,
        },
        imageUrl,
      });
      await product.save();
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
export default productServices;
