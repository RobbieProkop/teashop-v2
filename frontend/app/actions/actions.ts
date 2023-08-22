export const getProducts = async () => {
  const res = await fetch("http://localhost:8080/api/products");
  if (!res.ok) throw new Error("Error in fetching products");
  return res.json();
};
