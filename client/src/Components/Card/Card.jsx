import React from "react"
import {Link} from "react-router-dom"


export default function Card({ id, name, image, diets }){
 return(
    <div>
         <Link to ={`/recipes/${id}`}> 
            <h1>{name}</h1>
            <img src={image? image:"https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg"} alt={name}/>
            {typeof diets == "string"?<h1>Compatible diets: {diets}</h1> : diets?.map((d)=><h2>Compatible diets: <p>{d.name}</p></h2>)}
        </Link>
    </div>
 )
}