"use server";
import { ProductsList } from "../types/products";

export async function getData(): Promise<ProductsList> {
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
  const values: ProductsList = result.values || [];
  return values;
}
