import react, { useState } from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = () => {
    const [count, setCount] = useState();

    const [items, setItems] = useState([]);

    const getPage = async (count) => {
        setItems(count)
    }

    const handlePageClick = (data) => {
        console.log(data.selected + 1)
    }
    return (
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={items}
            marginPagesDisplayed={3}
            pageRangeDisplayed={6}
            onPageChange={getPage}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
        />
    )
}
export default Pagination;