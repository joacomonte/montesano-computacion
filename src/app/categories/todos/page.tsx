import ProductsList from "@/components/ProductsList/ProductsList";
import {getData} from "src/lib/getData"

export default async function AllSubCategories() {
  let data = await getData();

  return (
    <div className="flex flex-col items-center w-full mt-40">
      <div className="w-9/10 flex justify-center items-center flex-wrap gap-5 md:gap-4 md:w-full md:text-sm">
        {data && data.length > 0 ? (
          <ProductsList data={data} />
        ) : (
          <h3 className="text-2xl font-bold"> No se encontraron productos en esta categoria :(</h3>
        )}
      </div>
    </div>
  );
}
