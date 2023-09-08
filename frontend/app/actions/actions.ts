import axios from "axios";

export const getProducts = () => {
  axios
    .get("/api/products")
    .then((data) => {
      if (!data) throw new Error("Error in fetching products");
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getSingleProduct = async (id: string) => {
  const { data } = await axios.get(`/api/products/${id}`);
  if (!data) throw new Error("Error in fetching product");
  return data;
};
