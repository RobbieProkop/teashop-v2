import axios from "axios";

export const getProducts = async () => {
  const { data } = await axios.get("http://localhost:8080/api/products");
  if (!data) throw new Error("Error in fetching products");
  return data;
};
