import { User_comments } from "../../constants/comments.js";
import HTTP_STATUS_CODES from "../httpStatus.js";
import productService from "../services/product.service.js";
const productController = {
  add: async (req, res) => {
    try {
      const { productName, price, about, imageUrl } = req.body;
      const user = req.user;
      if (!user) {
          return res.status(HTTP_STATUS_CODES.CLIENT_ERROR.UNAUTHORIZED).json({
              message: User_comments.Notloggedin,
            });
        }
        const product = await productService.createProduct({
            productName,
            price,
            about: {
                category: about.category,
                description: about.description || "",
                features: about.features || [],
                technologies: about.technologies || [],
                rating: about.rating || 0,
                review: about.review || 0,
                author: about.author || "Anonymous",
            },
            imageUrl,
        });
        return res.status(HTTP_STATUS_CODES.SUCCESS.CREATED).json({
            product,
        });
    } catch (error) {
        console.log("here------------------");
        return res
        .status(HTTP_STATUS_CODES.CLIENT_ERROR.BAD_REQUEST)
        .json({ error: error.message });
    }
  },
};
export default productController;
