/* eslint-disable react-hooks/exhaustive-deps */

import styles from "./page.module.css";
import { getData } from "@/lib/getAllData";
import ProductsList from "@/components/ProductsList/ProductsList";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import { getOffers } from "@/lib/getOffers";

export default async function Home() {
  let data = await getData();
  let offers = await getOffers();

  return (
    <div className={styles.pageContainer}>
      <main className={styles.main}>
        <div>
          {/* <h1 className="w-full pl-[5vw] pb-4 text-2xl font-medium text-left text-gray-800">Equipos armados</h1> */}
          <div className="w-[100vw] bg-[#EEEEEE] h-[60vw] max-h-[600px]">
            <HeroSlider />
          </div>
        </div>

        <div className={styles.carrouesellContainer}>
          <h1 className="w-full pb-4 text-2xl font-medium text-left text-gray-800">En oferta!</h1>
          <div className={styles.carrousell}>
            <ProductsList data={offers} limit={10} />
          </div>
        </div>
      </main>
    </div>
  );
}
