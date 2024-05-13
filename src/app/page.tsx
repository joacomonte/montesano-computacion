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
<<<<<<< HEAD
        <div className={styles.carrouesellContainer}>
          <h1 className=" ml-2 text-3xl font-medium" >Destacados</h1>
          <div className={styles.carrousell}>
            <ProductsList data={data} limit={10} />
=======
        <div>
          {/* <h1 className="w-full pl-[5vw] pb-4 text-2xl font-medium text-left text-gray-800">Equipos armados</h1> */}
          <div className="w-[100vw] bg-[#EEEEEE] h-[60vw] max-h-[600px]">
            <HeroSlider />
>>>>>>> RML_Main
          </div>
        </div>

        <div className={styles.carrouesellContainer}>
<<<<<<< HEAD
          <h1 className=" ml-2 text-3xl font-medium">En oferta!</h1>
=======
          <h1 className="w-full pb-4 text-2xl font-medium text-left text-gray-800">Oferta semanal</h1>
>>>>>>> RML_Main
          <div className={styles.carrousell}>
            <ProductsList data={offers} limit={10} />
          </div>
        </div>
      </main>
    </div>
  );
}
