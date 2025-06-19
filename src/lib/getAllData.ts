"use server";
import index from "@/globals";
import { ProductsList } from "../types/products";

// Type declaration for environment variables
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SHEET_ID?: string;
      API_KEY?: string;
    }
  }
}

export async function getData(): Promise<ProductsList> {
  const SHEET_ID = (process.env as any).SHEET_ID;
  const API_KEY = (process.env as any).API_KEY;
  
  // Check if environment variables are available
  if (!SHEET_ID || !API_KEY) {
    console.warn("Missing SHEET_ID or API_KEY environment variables");
    return [];
  }
  
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/productList?key=${API_KEY}`;
    const res = await fetch(url, { next: { revalidate: 4000 } } as RequestInit) // RequestInit fix TS alert of next revalidate 30 seconds

    if (!res.ok) {
      console.error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      return [];
    }

    const result = await res.json();

    const values: ProductsList = result.values || [];

    // filter all visible products 
    const visibleProducts: ProductsList = values.filter(product => product[index.VISIBLE] !== 'oculto');

    return visibleProducts;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
