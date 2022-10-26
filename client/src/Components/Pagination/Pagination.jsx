import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPage, nextPage, previousPage } from '../../Redux/Actions'
import './Pagination.css'

export function Pagination({ filtered }) {
    const dispatch = useDispatch()
    const { page, recipesPerPage } = useSelector(state => state)
    const handleSetPage = n => dispatch(setPage(n))
    const pageButtons = () => [-2, -1, 0, +1, +2]
        // si page es = a 7         5   6 (7)  8  9
        .map(n => n + page)
        // x son los númeritos de la lista que está arriba gil!
        .filter(index => index >= 0)
        // si los indices fueran negativos los ignoraría para que no crashee
        .filter(n => n < filtered.length / recipesPerPage)
        // n debería ser menor a filtered (la lista de recetas) dividido las recetas por pagina (esto daría el número de
        // paginas y controloaría que n no se pase de ese número), entonces cuando esté parado en la última pagina solo
        // mostraría los valores anteriores 
        .map(x => (<div className={x == page ? "current" : ""} onClick={() => handleSetPage(x)}>{x + 1}</div>))
    // este map transforma los números en botones cliqueables 

    return (
        <div className="pagination-buttons">
            <div onClick={() => page > 0 ? dispatch(previousPage()) : null}>{"<"}</div>
            {pageButtons()}
            <div onClick={() => page + 1 < filtered.length / recipesPerPage ? dispatch(nextPage()) : null}>{">"}</div>
        </div>
    )
}