import { useState } from "react";

const usePagination = ({totalItems, ItemsPerPage = 3}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems/ItemsPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    const startIndex = (currentPage - 1) * ItemsPerPage;
    const endIndex =  currentPage *  ItemsPerPage;

    return {
        currentPage,
        totalPages,
        handlePageChange,
        startIndex,
        endIndex
    }
}

export default usePagination;