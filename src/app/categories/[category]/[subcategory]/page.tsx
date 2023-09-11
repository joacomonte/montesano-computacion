"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import useFilterByCategory from "@/hooks/useFilterByCategory";
import { getData } from "@/lib/getAllData";
import { ProductsList } from "@/types/products";
import { useEffect, useState } from "react";
import styles from "@/app/page.module.css"



type Params = {
  params: {
    category: string;
    subcategory: string;
  };
};

export default function Subcategory({
  params: { category, subcategory },
}: Params) {
  const [data, setData] = useState<ProductsList>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      console.log("this", result);
    };

    fetchData();
  }, []);

  const filteredData = useFilterByCategory(data || [], category, subcategory);

  return (
    <div style={{ marginTop: "300px" }}>
      <h1>
        categoria {category} y subcategoria {subcategory}
      </h1>
      <div className={styles.productsContainer}>
        {filteredData.map(([productName, productPrice, stock, img], index) => (
          <ProductCard
            key={index}
            title={productName}
            img={img || ""}
            price={productPrice }
            stock={stock}
          />
        ))}
      </div>
    </div>
  );
}
