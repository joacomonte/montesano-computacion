"use client";

import ProductCard from "@/components/ProductCard/ProductCard";
import index from "@/globals";
import useFilterData from "@/hooks/useFilterData";
import { getData } from "@/lib/getAllData";
import { ProductsList } from "@/types/products";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import styles from "./page.module.css";

export default function SearchPage() {
  const [data, setData] = useState<ProductsList>();
  const [searchTerm, setSearchTerm] = useState("");

  const queryTerm = useSearchParams().get("query") || "";

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
    setSearchTerm(queryTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredData = useFilterData(data || [], searchTerm);

  return (
    <div className={styles.pageContent}>
      <div className={styles.searchContainer}>
        <label className={styles.searchLabel}>Busqueda global</label>
        <input
          className={styles.searchInput}
          id="searchInput"
          type="text"
          placeholder="Buscar..."
          aria-label="Busqueda"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="productsContainer">
        {filteredData.map((product) => (
          <ProductCard
            key={product[index.ID]}
            title={product[index.TITLE]}
            img={product[index.IMG]}
            price={product[index.PRICE]}
            oldPrice={product[index.OLD_PRICE]}
            stock={product[index.STOCK]}
          />
        ))}
      </div>
    </div>
  );
}
