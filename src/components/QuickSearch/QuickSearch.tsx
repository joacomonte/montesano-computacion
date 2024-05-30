/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { FC, use, useEffect, useRef, useState } from "react";
import styles from "./QuickSearch.module.css";
import { ProductsList } from "@/types/products";
import useFilterData from "@/hooks/useFilterData";
import useClickOutside from "@/hooks/useOutsideClick";
import { getData } from "@/lib/getAllData";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import index from "@/globals";

interface QuickSearchProps {
  data?: ProductsList;
}

const QuickSearch: FC<QuickSearchProps> = () => {
  const router = useRouter();

  const currentPage = usePathname();

  const [shouldRender, setShouldRender] = useState<boolean>(true);

  const [data, setData] = useState<ProductsList>();

  const divRef = useRef(null);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (currentPage === "/search") {
      setShouldRender(false);
    } else {
      setShouldRender(true);
    }
  }, [currentPage]);

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
    <>
      {shouldRender && (
        <div className={styles.componentContainer} ref={divRef}>
          <form className={styles.formStyle} onSubmit={handleSearch}>
            <svg className={styles.searchIcon} width="18px" height="18px" fill="none" viewBox="0 0 24 24">
              <path
                d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="lightgrey"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input className={styles.searchInput} id="searchInput" type="text" aria-label="Busqueda" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </form>

          {searchTerm && searchTerm.trim() !== "" ? (
            filteredData.length > 0 ? (
              <ul className={styles.cardList}>
                <li className={styles.firstCard}>
                  <button onClick={handleSearch}>Enter o click aquí para buscar</button>
                </li>
                {filteredData.slice(0, 6).map((product) => (
                  <li key={product[index.ID]} className={styles.card}>
                    <Link href={`/product/${product[index.ID]}`} onClick={clearData}>
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
      )}
    </>
  );
};

export default QuickSearch;
