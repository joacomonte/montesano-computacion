/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import styles from "./page.module.css";

import { menuData } from "./data/menuData";

import ProductCard from "./components/ProductCard/ProductCard";
import SideMenu from "./components/SideMenu/SideMenu";

import useFetchData from "./hooks/useFetchData.ts";
import useFilterData from "./hooks/useFilterData";


export default function Home() {

  const data = useFetchData();
  
  const { filteredData, setSearchTerm, searchTerm } = useFilterData(data);

  return (
    <div className={styles.pageContainer}>
      <SideMenu data={menuData} />
      <main className={styles.main}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className={styles.productsContainer}>
          {filteredData.map((product, index) => (
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
