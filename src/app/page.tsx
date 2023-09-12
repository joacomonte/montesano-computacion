/* eslint-disable react-hooks/exhaustive-deps */

import styles from "./page.module.css";
import ProductCard from "@/components/ProductCard/ProductCard";
import { getData } from "@/lib/getAllData";
import index from "@/globals";

export default async function Home() {
  let data = await getData();

  return (
    <div className={styles.pageContainer}>
      <main className={styles.main}>
        <div className={styles.carrouesellContainer}>
          <h1 style={{ marginLeft: "10px" }}>Destacados</h1>
          <div className={styles.carrousell}>
            {data.map((product) => (
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

        <div className={styles.carrouesellContainer}>
          <h1 style={{ marginLeft: "10px" }}>En oferta!</h1>
          <div className={styles.carrousell}>
            {data.map((product) => (
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
        {/* <div className={styles.productsContainer}>
          {data.map((product, index) => (
            <ProductCard
              key={index}
              title={product[0] || "Sin titulo"}
              img={product[3] || ""}
              price={product[1] || "Sin precio"}
              stock={product[2] || "Consultar disponibilidad"}
            />
          ))}
        </div> */}
      </main>
    </div>
  );
}
