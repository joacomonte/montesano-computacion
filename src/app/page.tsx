/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import {useEffect, useRef} from "react";

import styles from "./page.module.css";

import { menuData } from "./data/menuData";

import ProductCard from "./components/ProductCard/ProductCard";
import SideMenu from "./components/SideMenu/SideMenu";

import useOutsideClick from "./hooks/useOutsideClick";
import useFetchData from "./hooks/useFetchData.ts";
import useFilterData from "./hooks/useFilterData";

import { SideMenuHandles } from "./interfaces/sideMenuHandles";

export default function Home() {


  
  const sideMenuRef = useRef<SideMenuHandles | null>(null);

  const isClickedOutside = useOutsideClick(sideMenuRef);
  
  const data = useFetchData();
  const { filteredData, setSearchTerm, searchTerm } = useFilterData(data);

  

  useEffect(() => {
    if (isClickedOutside) {
      sideMenuRef.current?.toggleMenu(false);
    }
  }, [isClickedOutside]);
  

  return (
    <div className={styles.pageContainer}>
      <SideMenu ref={sideMenuRef} data={menuData} />
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
