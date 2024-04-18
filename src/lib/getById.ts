import index from "@/globals";
import type { Product, ProductsList } from "@/types/products";
import { getData } from "./getAllData";

export async function getById(id: string): Promise<Product | undefined> {
  const allProducts: ProductsList = await getData();

  const product = allProducts.find((product: Product) => isMatchingId(product, id));

  return product;
}

function isMatchingId(product: Product, id: string): boolean {
  return product[index.ID] === id;
}
