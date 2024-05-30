import ProductsList from "@/components/ProductsList/ProductsList";
import { getByCategory } from "@/lib/getByCategory";

type Params = {
  params: {
    category: string;
    subcategory: string;
  };
};

export default async function Subcategory({ params: { category, subcategory } }: Params) {
  let data = await getByCategory(category, subcategory);

  return (
    <div className="flex flex-col items-center w-full mt-40 ">
      <div className="flex flex-wrap items-center justify-center gap-2 xs:gap-6 max-w-[1400px] pb-6" >
        {data && data.length > 0 ? <ProductsList data={data} /> : <h3 className="text-2xl font-bold"> No se encontraron productos en esta categoria :(</h3>}
      </div>
    </div>
  );
}
