import index from "@/globals";
import { getData } from "@/lib/getAllData";
import { Product } from "@/types/products";

interface MenuItem {
    id: string;
    label: string;
    children: { label: string; href: string }[];
  }
  
  export async function generateMenuData(): Promise<MenuItem[]> {
    const allProducts = await getData();
    
    // Ignore the first row by skipping the first element in the array
    const productsToProcess = allProducts.slice(1);
  
    const categoriesMap: { [key: string]: Set<string> } = {};
  
    productsToProcess.forEach((product: Product) => {
      const category = product[index.CATEGORY]?.toLowerCase();
      const subcategory = product[index.SUBCATEGORY]?.toLowerCase();
  
      if (category) {
        if (!categoriesMap[category]) {
          categoriesMap[category] = new Set();
        }
        if (subcategory) {
          categoriesMap[category].add(subcategory);
        }
      }
    });
  
    const menuData: MenuItem[] = Object.keys(categoriesMap).map((category, categoryIndex) => {
      const subcategories = Array.from(categoriesMap[category]);
  
      // Directly place "todos" at the first position
      const children = [{ id: `${categoryIndex + 1}01`, label: 'Todos', href: `/${category}/todos` }, ...subcategories.map((subcategory, subcategoryIndex) => ({
        id: `${categoryIndex + 1}${String(subcategoryIndex + 2).padStart(2, '0')}`,
        label: capitalize(subcategory),
        href: `/${category}/${subcategory}`
      }))];
  
      return {
        id: String(categoryIndex + 1).padStart(2, '0'),
        label: capitalize(category),
        children: children
      };
    });
  
    return menuData;
  }
  
  function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }