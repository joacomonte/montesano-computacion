"use server";
import { ProductsList } from "../types/products";

export async function getData(): Promise<ProductsList> {
  const SHEET_ID = process.env.SHEET_ID;
  const API_KEY = process.env.API_KEY;

  // const sheetId = "1r74G-LQCSEDh5_O6mnDecMoi8BMvzStdt4rNLu9zqkQ";
  // const apiKey = "AIzaSyBLFucdHwI51bvInRnmig4Tl2fglpqYffk";
  
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
