import type { Product, ProductsList } from "../types/products";
import index from "@/globals";

export default function useFilterByCategory(data: ProductsList, category: string, subcategory: string): ProductsList {
  return data.filter((product) => isMatchingCategory(product, category, subcategory));
}

function isMatchingCategory(product: Product, category: string, subcategory: string): boolean {
  const normalizedCategory = category.toLowerCase();
  const normalizedSubCategory = subcategory.toLowerCase();

  if (normalizedSubCategory === "todos") {
    return product[index.CATEGORY]?.toLowerCase() === normalizedCategory;
  }
  return product[index.CATEGORY]?.toLowerCase() === normalizedCategory && product[index.SUBCATEGORY]?.toLowerCase() === normalizedSubCategory;
}
