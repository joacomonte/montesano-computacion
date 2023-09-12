"use client";

import useFilterData from "@/hooks/useFilterData";
import { getData } from "@/lib/getAllData";
import { ProductsList } from "@/types/products";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const [data, setData] = useState<ProductsList>();
  const [searchTerm, setSearchTerm] = useState("");

  const search = useSearchParams().get("query") || "";

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };
    fetchData();
    setSearchTerm(search);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const filteredData = useFilterData(data || [], searchTerm);

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
      <input
        //   className={styles.searchInput}
        id="searchInput"
        type="text"
        placeholder="Buscar..."
        aria-label="Busqueda"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <h1>{data ? `Resultados de: ${searchTerm}` : "sin resultados"}</h1> */}
      <h3
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          margin: "50px",
        }}
      >
        {data ? (
          filteredData
            .slice(0, 15)
            .map((product) => <span key={product[0]}> {product[1]} </span>)
        ) : (
          <span>Sin resultados</span>
        )}
      </h3>
    </div>
  );
}
