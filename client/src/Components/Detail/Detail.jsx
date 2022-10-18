import React,{useEffect}from "react"
import {useSelector, useDispatch}from "react-redux"
import { getRecipeById } from "../../Redux/Actions"
import{ Link, useParams} from "react-router-dom"

export default function Detailed(){
    const dispatch = useDispatch();
    const {id} = useParams();
    const details = useSelector((state)=> state.recipe)

    useEffect(()=>{
        dispatch(getRecipeById(id));
    },[]);
    return(
        <>
            <div>
                <Link to={"/home"}>
                    
                    <h1>{details.name}</h1>
                    <img src={details.image? details.image:"https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg"}/>
                    <h3> Diets: <p>{details.diets}</p></h3>
                    <h2>Dish type: <p>{details.dishType}</p></h2>
                    <h2>Summary:<p><div dangerouslySetInnerHTML={{ __html: details?.summary}}></div></p> <div dangerouslySetInnerHTML={{ __html: details?.summary}}></div></h2>
                    <h2> <h2>Step by step:</h2> {details.stepByStep}</h2>
                    <h2>Health Score : {details.healthScore}</h2>

                </Link>
            </div>
        </>
    )
}


