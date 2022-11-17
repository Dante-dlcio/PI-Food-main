import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getRecipeByName } from '../../Redux/Actions';
//import "./SearchBar.css"


export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')


    function handleChange(e) {
        e.preventDefault();
        setName(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (name === '') {
            console.log('me colé al if este y no te traje nada ')
            dispatch(getRecipeByName())
        }
        else {
            dispatch(getRecipeByName(name))
        }
    }




    function handleKeyDown(e) {
        if (e.keyCode === 13) {
            handleSubmit(e)
        }
    }
    return (
        <>
            <input className='input-css'
                type='text'
                placeholder='Enter your meal'
                onKeyDown={handleKeyDown}
                defaultValue={''}
                onChange={(e) => handleChange(e)}>
            </input>
            <button className='btn' type='submit' onClick={(e) => handleSubmit(e)}>
                Search
            </button>
        </>
    )





}
