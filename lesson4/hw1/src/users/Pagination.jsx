import React from 'react';

const Pagination = ({ prevPage, nextPage, currentPage, totalItems }) => {

    return (
        <div className="pagination">
            <button
                className="btn"
                onClick={prevPage}
                disabled={currentPage + 1 === 1}>
                {currentPage + 1 !== 1 && '←'}
            </button>

            <span className="pagination__page">{currentPage + 1}</span>

            <button
                className="btn"
                onClick={nextPage}
                disabled={(currentPage + 1) * 3 > totalItems}>
                {(currentPage + 1) * 3 < totalItems && '→'}
            </button>
        </div>
    );
}

export default Pagination;