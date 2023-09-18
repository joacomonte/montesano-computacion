import index from "@/globals";
import { Product, ProductsList } from "@/types/products";
import { getData } from "./getAllData";

export async function getByCategory(category: string, subcategory: string): Promise<ProductsList> {

  const allProducts = await getData();

  const filteredData = allProducts.filter((product: Product) =>
    isMatchingCategory(product, category, subcategory)
  );

  return filteredData;
}

function isMatchingCategory(
  product: Product,
  category: string,
  subcategory: string
): boolean {
  const normalizedCategory = category.toLowerCase();
  const normalizedSubCategory = subcategory.toLowerCase();

  if (normalizedSubCategory === "todos") {
    return product[index.CATEGORY]?.toLowerCase() === normalizedCategory;
  }
  return (
    product[index.CATEGORY]?.toLowerCase() === normalizedCategory &&
    product[index.SUBCATEGORY]?.toLowerCase() === normalizedSubCategory
  );
}
