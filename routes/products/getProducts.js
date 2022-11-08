import { GolfProducts } from "../../models/models.js";

const getProducts = async (req, res) => {
  console.log("Getting products:");

  const products = await GolfProducts.find({});

  console.log("products:", products);

  return res.json({
    success: true,
    message: "Successfully obatained products",
    products,
  });
};

export default getProducts;
