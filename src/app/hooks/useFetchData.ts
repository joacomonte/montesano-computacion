// hooks/useFetchData.ts
import { useState, useEffect } from 'react';
import { Product, ProductsList } from '../types/rowData';
import { fetchSheetData } from '../services/fetchSheetData';

function useFetchData() {
  const [data, setData] = useState<ProductsList>([]);

  useEffect(() => {
    async function fetchData() {
      const values = await fetchSheetData();
      setData(values);
    }
    fetchData();
  }, []);

  return data;
}

export default useFetchData;
