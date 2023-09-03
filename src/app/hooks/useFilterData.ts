// hooks/useFilterData.ts
import { useState, useEffect } from 'react';
import { RowData } from '../types/rowData';
import { filterProducts } from '../helpers/filterProducts';

function useFilterData(data: RowData[], initialSearchTerm = "") {
    const [filteredData, setFilteredData] = useState<RowData[]>(data);
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  
    useEffect(() => {
      const filtered = filterProducts(data, searchTerm);
      setFilteredData(filtered);
    }, [searchTerm, data]);
  
    return { filteredData, setSearchTerm, searchTerm };
  }
  
  export default useFilterData;