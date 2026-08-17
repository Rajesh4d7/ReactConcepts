import "react";
import usePagination from "../hooks/usePagination";
import useQuery from "../hooks/useQuery";

const ITEMS_PER_PAGE = 3;

const PaginationComponent = () => {
    const {data, loading, error} = useQuery("https://jsonplaceholder.typicode.com/posts");
    const {currentPage, totalPages, startIndex, endIndex, handlePageChange} = usePagination({
        totalItems: data?.length || 0, ItemsPerPage: ITEMS_PER_PAGE
    })

    if(loading) return <div>Loading...</div>
    if(error) return <div>Error: {error.message}</div>

    return (
        <div>
            <h1>Pagination Component</h1>
            <p>Requirement: Implement a pagination component that displays a list of items and allows the user to navigate through the items.</p>
            
            <ul>
                {data.slice(startIndex, endIndex).map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
            <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage <= 1}>Previous</button>
            <span>Current Page: {currentPage}/ Total Pages: {totalPages}</span>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage >= totalPages}>Next</button>
        </div>
    );
}

export default PaginationComponent;