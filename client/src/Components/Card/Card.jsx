import React from "react"
import { Link } from "react-router-dom"
import "./Card.css"

export default function Card({ id, name, image, diets }) {
   return (
      <div className='Card'>
         <Link to={`/recipes/${id}`}>
            <div className="name-Container">
               <h1>{name}</h1>
            </div>
            <img className="image" src={image ? image : "https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg"} alt={name} />
            <div>
               <h2>Compatible Diets:  {diets?.map((d) => <p>{d.name}</p>)}</h2>
            </div>
         </Link>
      </div>
   )
}