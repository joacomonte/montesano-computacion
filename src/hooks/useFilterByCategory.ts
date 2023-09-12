import { Product, ProductsList } from "../types/products";

export default function useFilterByCategory(
  data: ProductsList,
  category: string,
  subcategory: string
): ProductsList {
  return data.filter((product) =>
    isMatchingCategory(product, category, subcategory)
  );
}

function isMatchingCategory(
  product: Product,
  category: string,
  subcategory: string
): boolean {
  const normalizedCategory = category.toLowerCase();
  const normalizedSubCategory = subcategory.toLowerCase();

  if (normalizedSubCategory === "todos") {
    return product[5]?.toLowerCase() === normalizedCategory;
  }
  return (
    product[5]?.toLowerCase() === normalizedCategory &&
    product[6]?.toLowerCase() === normalizedSubCategory
  );
}
