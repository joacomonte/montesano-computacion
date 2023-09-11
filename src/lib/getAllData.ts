"use server";
import { ProductsList } from "../types/products";

export async function getData(): Promise<ProductsList> {

  const SHEET_ID = process.env.API_URL;
  const API_KEY = process.env.API_URL;

  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/productList?key=${API_KEY}`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();
  const values: ProductsList = result.values || [];
  return values;
}
