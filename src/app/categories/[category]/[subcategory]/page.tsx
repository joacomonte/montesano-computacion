
import ProductCard from "@/components/ProductCard/ProductCard";
import useFilterByCategory from "@/hooks/useFilterByCategory";
import { getData } from "@/lib/getAllData";
import { ProductsList } from "@/types/products";
import { useEffect, useState } from "react";
import styles from "@/app/page.module.css"
import { getByCategory } from "@/lib/getByCategory";



type Params = {
  params: {
    category: string;
    subcategory: string;
  };
};

export default async function Subcategory({
  params: { category, subcategory },
}: Params) {

  let data = await getByCategory(category, subcategory);

  console.log(data);


  return (
    <div style={{ marginTop: "150px", display:'flex', flexDirection:'column', alignItems:'center', width: '100%' }}>
      <h1 style={{textAlign: 'center', margin: '50px'}}>
        categoria {category} y subcategoria {subcategory}
      </h1>
      <div className={styles.productsContainer}>
        {data.map(([productName, productPrice, stock, img], index) => (
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
