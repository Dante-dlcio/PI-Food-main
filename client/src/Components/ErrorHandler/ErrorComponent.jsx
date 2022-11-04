import React from 'react'
import "./ErrorComponent.css"
import { useDispatch } from 'react-redux'
import { getRecipes } from '../../Redux/Actions'


export default function ErrorComponent() {
    const dispatch = useDispatch()

    function handleOnClick(e) {
        e.preventDefault(e)
        dispatch(getRecipes())

    }
    return (
        <div>
            The recipe you're looking for don't exist, so go make it!

            <button onClick={(e) => handleOnClick(e)} >
                Back to Home
            </button>
        </div>
    )
}
