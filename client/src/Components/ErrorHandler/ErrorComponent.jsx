import React from 'react'
import "./ErrorComponent.css"
import { useDispatch } from 'react-redux'
import { getRecipes } from '../../Redux/Actions'
import "./ErrorComponent.css"

export default function ErrorComponent() {
    const dispatch = useDispatch()

    function handleOnClick(e) {
        e.preventDefault(e)
        dispatch(getRecipes())

    }
    return (
        <div className='error-background'>
            <div className='msg-btn-ctn'>
                The recipe you're looking for doesn't exist, so go make it!
            </div>
            <div className="container-button" >
                <button className='Button-Home' onClick={(e) => handleOnClick(e)} >
                    Back to Home
                </button>
            </div>

        </div>
    )
}
