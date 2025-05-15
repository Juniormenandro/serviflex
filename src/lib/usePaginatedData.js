import { useState, useMemo } from 'react';

const usePaginatedData = ({ data = [], statusFilter = null, selectedMonth = null, itemsPerPage = 4 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = useMemo(() => {
    let filtered = [...data];
    if (statusFilter) filtered = filtered.filter(item => item.status === statusFilter);
    if (selectedMonth) filtered = filtered.filter(item => item.date?.startsWith(selectedMonth));
    return filtered;
  }, [data, statusFilter, selectedMonth]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(start, start + itemsPerPage);
  }, [filteredData, currentPage, itemsPerPage]);

  return {
    paginatedData,
    totalPages,
    currentPage,
    setCurrentPage,
    totalItems: filteredData.length,
  };
};

export default usePaginatedData;
