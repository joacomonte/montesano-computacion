"use server";

import { Product, ProductsList } from "@/types/products";

export async function getById(id: string): Promise<ProductsList> {

  const SHEET_ID = process.env.SHEET_ID;
  const API_KEY = process.env.API_KEY;

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/productList?key=${API_KEY}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();
  const filteredData = result.values.filter((product: any) => 
    isMatchingId(product, id)
  );

  return filteredData;
}

function isMatchingId(product: Product, id: string): boolean {
  return product[0] === id;
}
