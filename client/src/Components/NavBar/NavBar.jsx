import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

export default function NavBar() {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div>
        <select>
          <option>A-Z</option>
          <option>Z-A</option>

        </select>
        <select>
          <option>
            Diets
          </option>
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


