// hooks/useFetchData.ts
import { useState, useEffect } from 'react';
import { RowData } from '../types/rowData';
import { fetchSheetData } from '../services/fetchSheetData';

function useFetchData() {
  const [data, setData] = useState<RowData[]>([]);

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
