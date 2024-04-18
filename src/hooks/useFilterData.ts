// hooks/useFilterData.ts

import index from "@/globals";
import type { Product, ProductsList } from "../types/products";

export default function useFilterData(data: ProductsList, searchTerm: string) {
  const normalizedTerm = searchTerm.toLowerCase().split(" ");

  const filteredData = data.filter((row) => doesRowMatchSearchTerms(row, normalizedTerm)).sort(compareRowByPrice);
  // .sort(compareRowSearchTermPosition(searchTerm));
  return filteredData;
}

function doesRowMatchSearchTerms(product: Product, searchTerms: string[]): boolean {
  return searchTerms.every((term) => product[index.TITLE]?.toLowerCase().includes(term));
}

function compareRowByPrice(a: Product, b: Product): number {
  const priceA = parseFloat(cleanPrice(a[index.PRICE] || ""));
  const priceB = parseFloat(cleanPrice(b[index.PRICE] || ""));

  return priceA - priceB;
}

function cleanPrice(price: string): string {
  // If price is null or undefined, return "0"
  if (!price) return "0";

  // Remove all non-digit characters except for the decimal point
  return price.replace(/[^\d.]/g, "");
}

// function compareRowSearchTermPosition(searchTerm: string) {
//   return (a: Product, b: Product): number => {
//     const indexA = getTermIndexInRow(a, searchTerm);
//     const indexB = getTermIndexInRow(b, searchTerm);

//     return indexA - indexB;
//   };
// }

// function getTermIndexInRow(row: Product, searchTerm: string): number {
//   return row[index.TITLE]?.toLowerCase().indexOf(searchTerm) ?? Infinity;
// }
