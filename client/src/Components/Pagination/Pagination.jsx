import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPage, nextPage, previousPage } from '../../Redux/Actions'
import './Pagination.css'

export function Pagination({ filtered }) {
    const dispatch = useDispatch()
    const { page, recipesPerPage } = useSelector(state => state)
    const handleSetPage = x => dispatch(setPage(x))
    const pageButtons = () => [-2, -1, 0, +1, +2]
        .map(x => x + page)
        .filter(x => x >= 0)
        .filter(x => x < filtered.length / recipesPerPage)
        .map(x => (<div className={x == page ? "current" : ""} onClick={() => handleSetPage(x)}>{x + 1}</div>))

    return (
        <div className="pagination-buttons">
            <div onClick={() => page > 0 ? dispatch(previousPage()) : null}>{"<"}</div>
            {pageButtons()}
            <div onClick={() => page + 1 < filtered.length / recipesPerPage ? dispatch(nextPage()) : null}>{">"}</div>
        </div>
    )
}