// hooks/useFilterData.ts

import index from "@/globals";
import { Product, ProductsList } from "../types/products";

export default function useFilterData(data: ProductsList, searchTerm: string) {
  
  const normalizedTerm = searchTerm.toLowerCase().split(' ');

  const filteredData = data
    .filter(row => doesRowMatchSearchTerms(row, normalizedTerm))
    .sort(compareRowSearchTermPosition(searchTerm));
  return filteredData;
}

function doesRowMatchSearchTerms(product: Product, searchTerms: string[]): boolean {
  return searchTerms.every(term => product[index.TITLE]?.toLowerCase().includes(term));
}

function compareRowSearchTermPosition(searchTerm: string) {
  return (a: Product, b: Product): number => {
    const indexA = getTermIndexInRow(a, searchTerm);
    const indexB = getTermIndexInRow(b, searchTerm);
    
    return indexA - indexB;
  };
}

function getTermIndexInRow(row: Product, searchTerm: string): number {
  return row[index.TITLE]?.toLowerCase().indexOf(searchTerm) ?? Infinity;
}

