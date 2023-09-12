"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./QuickSearch.module.css";
// Make sure to replace with the correct path
import { ProductsList } from "@/types/products";
import useFilterData from "@/hooks/useFilterData";
import useClickOutside from "@/hooks/useOutsideClick";
import { getData } from "@/lib/getAllData";
import Link from "next/link";

interface QuickSearchProps {
  data?: ProductsList;
}

const QuickSearch: FC<QuickSearchProps> = () => {
  const [data, setData] = useState<ProductsList>();

  const divRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  const filteredData = useFilterData(data || [], searchTerm);

  const clearData = () => {
    setSearchTerm("");
  };

  useClickOutside(divRef, clearData);

  return (
    <div className={styles.componentContainer} ref={divRef}>
      <input
        type="text"
        placeholder="Busqueda"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      {searchTerm && searchTerm.trim() !== "" ? (
        filteredData.length > 0 ? (
          <ul className={styles.cardList}>
            {filteredData.slice(0, 3).map((product) => (
              <li key={product[0]} className={styles.card}>
                <Link href={`/product/${product[0]}`}>
                  {product[1]} <b>{product[2]}</b>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <ul className={styles.cardList}>
            <li className={styles.card}>Sin resultados</li>
          </ul>
        )
      ) : null}
    </div>
  );
};

export default QuickSearch;
