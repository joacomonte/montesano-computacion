import React from 'react';
import ProductCard from '@/components/ProductCard/ProductCard'
import index from '@/globals';
import { ProductsList } from '@/types/products'


interface ProductsListComponentProps {
    data: ProductsList;
}

const ProductsList: React.FC<ProductsListComponentProps> = ({ data }) => {
    return (
        <>
            {data.slice(0, 8).map((product) => (
                <ProductCard
                    key={product[index.ID]}
                    title={product[index.TITLE]}
                    img={product[index.IMG]}
                    price={product[index.PRICE]}
                    oldPrice={product[index.OLD_PRICE]}
                    stock={product[index.STOCK]}
                />
            ))}
        </>
    );
}

export default ProductsList;
