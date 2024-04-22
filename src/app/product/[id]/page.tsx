import ProductCard from "@/components/ProductCard/ProductCard";
import index from "@/globals";
import { getById } from "@/lib/getById";

type Params = {
  params: {
    id: string;
  };
};

export default async function Subcategory({ params: { id } }: Params) {
  let product = await getById(id);

  return (
    <div className="flex flex-col items-center w-full mt-40">
      {product ? (
        <ProductCard
          key={product[index.ID]}
          title={product[index.TITLE]}
          img={product[index.IMG]}
          price={product[index.PRICE]}
          oldPrice={product[index.OLD_PRICE]}
          stock={product[index.STOCK]}
          description={product[index.DESCRIPTION]}
          cuotas1={product[index.CUOTAS1]}
          cuotas2={product[index.CUOTAS2]}
        />
      ) : null}
    </div>
  );
}
