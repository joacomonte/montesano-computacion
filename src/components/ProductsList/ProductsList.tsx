import React from 'react';
import ProductCard from '@/components/ProductCard/ProductCard'
import index from '@/globals';
import { Product, ProductsList } from '@/types/products'

interface ProductsListComponentProps {
    data: ProductsList;
    limit?: number;
}

/**
 * @param {number} limit - The maximum number of items that will be displayed.
 * ```tsx
 * <ProductsList data={productsData} limit={5} />
 * ```
 */
const ProductsList: React.FC<ProductsListComponentProps> = ({ data, limit }) => {
    const productsToRender = limit ? data.slice(0, limit) : data;
    return (
        <>
            {productsToRender.map((product: Product) => (
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
