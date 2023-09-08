"use client";
import React, { FC, useRef, useState } from "react";
import styles from "./QuickSearch.module.css";
// Make sure to replace with the correct path
import { ProductsList } from "@/app/types/products";
import useFilterData from "@/app/hooks/useFilterData";
import useClickOutside from "@/app/hooks/useOutsideClick";

interface QuickSearchProps {
  data: ProductsList;
}

const QuickSearch: FC<QuickSearchProps> = ({ data }) => {
  const divRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");

  const { filteredData } = useFilterData(data, searchTerm);

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
        <ul className={styles.cardList}>
          {filteredData.slice(0, 3).map((product, index) => (
            <li key={product[0]} className={styles.card}>
              {product[0]} <b>{product[1]}</b>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default QuickSearch;
