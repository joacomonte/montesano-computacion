"use server";

import index from "@/globals";
import { Product, ProductsList } from "@/types/products";

export async function getByCategory(category: string, subcategory: string): Promise<ProductsList> {

  const SHEET_ID = process.env.SHEET_ID;
  const API_KEY = process.env.API_KEY;

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/productList?key=${API_KEY}`;
  const res = await fetch(url, {
    next: { revalidate: 30 },
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
    return product[index.CATEGORY]?.toLowerCase() === normalizedCategory;
  }
  return (
    product[index.CATEGORY]?.toLowerCase() === normalizedCategory &&
    product[index.SUBCATEGORY]?.toLowerCase() === normalizedSubCategory
  );
}
