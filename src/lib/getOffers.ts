"use server";
import index from "@/globals";
import { ProductsList } from "../types/products";

const SHEET_ID = process.env.SHEET_ID;
const API_KEY = process.env.API_KEY;

// const SHEET_ID = process.env.SHEET_ID;
// const API_KEY = process.env.API_KEY;

// export async function getOffers(): Promise<ProductsList> {
//   const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/ofertas?key=${API_KEY}`;
//   const res = await fetch(url, { next: { revalidate: 120 } } as RequestInit); // RequestInit fix TS alert of next revalidate 30 seconds

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const result = await res.json();

//   const values: ProductsList = result.values || [];

//   // filter all visible products
//   const visibleProducts: ProductsList = values.filter((product) => product[index.VISIBLE] !== "oculto");

//   return visibleProducts;
// }

export async function getOffers(): Promise<ProductsList> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/ofertas?key=${API_KEY}`;

  // Making the fetch request.
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const { values = [] } = (await response.json()) as { values: ProductsList };

  // Assuming the first row contains column headers and should be skipped.
  const productsStartingFromSecondRow = values.slice(1);

  // Filter all visible products, assuming 'oculto' means hidden.
  const visibleProducts = productsStartingFromSecondRow.filter((product) => product[index.VISIBLE] !== "oculto");

  return visibleProducts;
}
