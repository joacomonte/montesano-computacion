
import ProductCard from "@/components/ProductCard/ProductCard";
import { getByCategory } from "@/lib/getByCategory";
import index from "@/globals";



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

  return (
    <div style={{ marginTop: "150px", display:'flex', flexDirection:'column', alignItems:'center', width: '100%' }}>
      <h1 style={{textAlign: 'center', margin: '50px'}}>
        categoria {category} y subcategoria {subcategory}
      </h1>
      <div className="productsContainer">
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
  );
}
