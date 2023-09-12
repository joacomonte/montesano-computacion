"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import styles from "./QuickSearch.module.css";
import { ProductsList } from "@/types/products";
import useFilterData from "@/hooks/useFilterData";
import useClickOutside from "@/hooks/useOutsideClick";
import { getData } from "@/lib/getAllData";
import Link from "next/link";
import { useRouter } from "next/navigation";
import index from "@/globals";

interface QuickSearchProps {
  data?: ProductsList;
}

const QuickSearch: FC<QuickSearchProps> = () => {
  const router = useRouter();

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

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/search?query=${searchTerm}`);
    clearData();
  };

  return (
    <div className={styles.componentContainer} ref={divRef}>
      <form onSubmit={handleSearch}>
        <input
          className={styles.searchInput}
          id="searchInput"
          type="text"
          placeholder="Buscar..."
          aria-label="Busqueda"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <button
        type="submit"
        className={styles.searchIcon}
        aria-label="Search"
        role="button"
        onClick={handleSearch}
      >
        &#128269;
      </button>
      {searchTerm && searchTerm.trim() !== "" ? (
        filteredData.length > 0 ? (
          <ul className={styles.cardList}>
            {filteredData.slice(0, 6).map((product) => (
              <li key={product[index.ID]} className={styles.card}>
                <Link href={`/product/${product[index.ID]}`}>
                  {product[index.TITLE]} <b>{product[index.PRICE]}</b>
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
