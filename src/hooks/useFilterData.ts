// hooks/useFilterData.ts

import { Product, ProductsList } from "../types/products";

export default function useFilterData(data: ProductsList, searchTerm: string) {
  
  const normalizedTerm = searchTerm.toLowerCase().split(' ');

  const filteredData = data
    .filter(row => doesRowMatchSearchTerms(row, normalizedTerm))
    .sort(compareRowSearchTermPosition(searchTerm));
  return filteredData;
}

function doesRowMatchSearchTerms(product: Product, searchTerms: string[]): boolean {
  return searchTerms.every(term => product[0]?.toLowerCase().includes(term));
}

function compareRowSearchTermPosition(searchTerm: string) {
  return (a: Product, b: Product): number => {
    const indexA = getTermIndexInRow(a, searchTerm);
    const indexB = getTermIndexInRow(b, searchTerm);
    
    return indexA - indexB;
  };
}

function getTermIndexInRow(row: Product, searchTerm: string): number {
  return row[0]?.toLowerCase().indexOf(searchTerm) ?? Infinity;
}





// export default function useFilterData(data: RowData[], searchTerm: string) {

//   // Split the searchTerm by space
//   const searchTerms = searchTerm.toLowerCase().split(' ');

//   const filteredData = data.filter(row => 
//     searchTerms.every(term => row[0]?.toLowerCase().includes(term))
//   );

//   return { filteredData };
// }

