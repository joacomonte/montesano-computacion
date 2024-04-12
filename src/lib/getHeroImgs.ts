"use server";

const SHEET_ID = "1r74G-LQCSEDh5_O6mnDecMoi8BMvzStdt4rNLu9zqkQ";
const API_KEY = "AIzaSyBLFucdHwI51bvInRnmig4Tl2fglpqYffk";

// const SHEET_ID = process.env.SHEET_ID;
// const API_KEY = process.env.API_KEY;

export async function getHeroImgs(): Promise<any> {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/banners?key=${API_KEY}`;

  const res = await fetch(url, { next: { revalidate: 120 } } as RequestInit); // RequestInit fix TS alert of next revalidate 30 seconds

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();

  const values = result.values || [];

  return values;
}
