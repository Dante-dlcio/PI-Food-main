import React,{useState} from 'react'
import {useDispatch} from  'react-redux'
import { getRecipeByName, getRecipes } from '../../Redux/Actions';


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    
    function handleChange(e){
        e.preventDefault();
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        if(name){
            dispatch(getRecipeByName(name))
        }else{
            dispatch(getRecipes())
        }
    }
    
    function handleKeyDown(e){
        if(e.keyCode == 13){
            handleSubmit(e)
        }
    }
    return(
        <>
            <input
            type = 'text'
            placeholder='enter your meal'
            onChange={(e)=>handleChange(e)}>
            </input>
            <button type='submit' onClick={(e) => handleSubmit(e)}>
                Search
            </button>
        </>
    )





}
