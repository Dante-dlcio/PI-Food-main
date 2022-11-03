import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getDiets, getRecipes, setDietFilter, setOrders } from '../../Redux/Actions'
import SearchBar from '../SearchBar/SearchBar'
import "./NavBar.css"


export default function NavBar() {
  const dispatch = useDispatch()
  const { diets, filterByDiet, orders } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch]);
  useEffect(() => {
    dispatch(getDiets())
  }, [dispatch]);

  function handleDietOnChange(e) {
    console.log(e.target.value)
    dispatch(setDietFilter(e.target.value))
  }

  function handleOrdersOnChange(e) {
    dispatch(setOrders(e.target.options.selectedIndex))
  }


  return (
    <>
      <div className='container-gf'>
        <div className='container-sb' >
          <SearchBar />
        </div>
        <div className='container-nav-father'>
          <div>
            <select className='select-o-f' value={orders} onChange={handleOrdersOnChange}>
              <option value='0'>A-Z</option>
              <option value='1'>Z-A</option>
              <option value='2'>Health Score ↑ </option>
              <option value='3'>Health Score ↓</option>

            </select>
            <select className='select-o-f' defaultValue={filterByDiet} onChange={handleDietOnChange}>
              <option>
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
              <button className='beTheChefButton'>
                Be the Chef!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}


