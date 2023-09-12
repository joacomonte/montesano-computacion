
import ProductCard from "@/components/ProductCard/ProductCard";
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

  return (
    <div style={{ marginTop: "150px", display:'flex', flexDirection:'column', alignItems:'center', width: '100%' }}>
      <h1 style={{textAlign: 'center', margin: '50px'}}>
        categoria {category} y subcategoria {subcategory}
      </h1>
      <div className="productsContainer">
        {data.map(([id, productName, productPrice, stock, img]) => (
          <ProductCard
            key={id}
            title={productName}
            img={img}
            price={productPrice }
            stock={stock}
          />
        ))}
      </div>
    </div>
  );
}
