'use client'

import useFilterData from "@/hooks/useFilterData";
import { getData } from "@/lib/getAllData";
import { ProductsList } from "@/types/products";
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from "react";

export default function SearchPage() {

  const [data, setData] = useState<ProductsList>();

  const [searchTerm, setSearchTerm] = useState("");



  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, []);

  const searchParams = useSearchParams()
 
  const search = searchParams.get('query') || '';

  const filteredData = useFilterData(data || [], search);

  return (
    <div
      style={{
        marginTop: "150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {/* <input
        //   className={styles.searchInput}
        id="searchInput"
        type="text"
        placeholder="Buscar..."
        aria-label="Busqueda"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      /> */}
      <h1>
        Resultados de: {search}
      </h1>
      <h3 style={{flex: 1, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", textAlign: "center", margin: "50px" }}>
        {data &&
          filteredData.map((product) => (
            <span key={product[0]}> {product[1]} </span>
          ))}
      </h3>
    </div>
  );
}
