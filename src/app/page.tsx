/* eslint-disable react-hooks/exhaustive-deps */

import styles from "./page.module.css";
import { getData } from "@/lib/getAllData";
import ProductsList from "@/components/ProductsList/ProductsList";

export default async function Home() {
  let data = await getData();

  return (
    <div className={styles.pageContainer}>
      <main className={styles.main}>
        <div className={styles.carrouesellContainer}>
          <h1 style={{ marginLeft: "10px" }}>Destacados</h1>
          <div className={styles.carrousell}>
            <ProductsList data={data} />
          </div>
        </div>

        <div className={styles.carrouesellContainer}>
          <h1 style={{ marginLeft: "10px" }}>En oferta!</h1>
          <div className={styles.carrousell}>
          <ProductsList data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
