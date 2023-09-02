import axios from "axios";

export const getProducts = async (url: string) => {
  const { data } = await axios.get(url);
  if (!data) throw new Error("Error in fetching products");
  return data;
};
