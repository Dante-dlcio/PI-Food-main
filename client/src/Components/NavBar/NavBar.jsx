import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDiets, getRecipes, setDietFilter, setOrders } from '../../Redux/Actions'
import SearchBar from '../SearchBar/SearchBar'


export default function NavBar() {
  const dispatch = useDispatch()
  const { diets, filters, orders } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch]);
  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch]);

  function handleDietOnChange(e) {
    dispatch(setDietFilter(e.target.options[e.target.option.selectedIndex].value))
  }

  function handleOrdersOnChange(e) {
    dispatch(setOrders(e.target.options.selectedIndex))
  }


  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div>
        <select value={orders} onChange={handleOrdersOnChange}>
          <option value='0'>A-Z</option>
          <option value='1'>Z-A</option>
          <option value='2'>Health Score ↑ </option>
          <option value='3'>Health Score ↓</option>

        </select>
        <select defaultValue={filters.byDiet} onChange={handleDietOnChange}>
          <option value=''>
            Diets
          </option>
          {
            diets?.map(d => (
              <option value={d.name}>
                {d.name}
              </option>
            ))
          }
        </select>
        <Link to="/create">
          <button>
            Be the Chef!
          </button>
        </Link>
      </div>
    </>
  )
}


