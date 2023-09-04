/* eslint-disable react-hooks/exhaustive-deps */

import styles from "./page.module.css";
import { menuData } from "./data/menuData";
import ProductCard from "./components/ProductCard/ProductCard";
import SideMenu from "./components/SideMenu/SideMenu";
import { RowData } from "./types/rowData";


async function getData(): Promise<RowData[]> {
  "use server";
  const sheetId = "1r74G-LQCSEDh5_O6mnDecMoi8BMvzStdt4rNLu9zqkQ";
  const apiKey = "AIzaSyBLFucdHwI51bvInRnmig4Tl2fglpqYffk";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/productList?key=${apiKey}`;
  const res = await fetch(url, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await res.json();
  const values: RowData[] = result.values || [];
  return values;
}

export default async function Home() {

  let data = await getData();

  return (
    <div className={styles.pageContainer}>
      <SideMenu data={menuData} />
      <main className={styles.main}>
        <div className={styles.productsContainer}>
          {data.map((product, index) => (
            <ProductCard
              key={index}
              title={product[0] || "Sin titulo"}
              price={product[1] || "Sin precio"}
              stock={product[2] || "Stock desconocido"}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
