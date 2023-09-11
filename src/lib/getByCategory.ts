"use server";

import { Product, ProductsList } from "@/types/products";

export async function getByCategory(category: string, subcategory: string): Promise<ProductsList> {
  const sheetId = "1r74G-LQCSEDh5_O6mnDecMoi8BMvzStdt4rNLu9zqkQ";
  const apiKey = "AIzaSyBLFucdHwI51bvInRnmig4Tl2fglpqYffk";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/productList?key=${apiKey}`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();
  const filteredData = result.values.filter((product: any) =>
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
    return product[4]?.toLowerCase() === normalizedCategory;
  }
  return (
    product[4]?.toLowerCase() === normalizedCategory &&
    product[5]?.toLowerCase() === normalizedSubCategory
  );
}
