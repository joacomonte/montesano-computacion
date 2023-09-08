import { Product } from '../types/rowData';

const sheetId = '1r74G-LQCSEDh5_O6mnDecMoi8BMvzStdt4rNLu9zqkQ';
const apiKey = 'AIzaSyBLFucdHwI51bvInRnmig4Tl2fglpqYffk';
const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/productList?key=${apiKey}`;
// const range = 'YOUR_RANGE';

export const fetchSheetData = async (): Promise<Product[]> => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const values: Product[] = result.values || [];
    return values;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
