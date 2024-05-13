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
          <h1 className=" ml-2 text-3xl font-medium" >Destacados</h1>
          <div className={styles.carrousell}>
            <ProductsList data={data} limit={10} />
          </div>
        </div>

        <div className={styles.carrouesellContainer}>
          <h1 className=" ml-2 text-3xl font-medium">En oferta!</h1>
          <div className={styles.carrousell}>
          <ProductsList data={data} limit={10} />
          </div>
        </div>
      </main>
    </div>
  );
}
