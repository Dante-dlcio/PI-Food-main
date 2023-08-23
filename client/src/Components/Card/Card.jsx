import React from "react"
import { Link } from "react-router-dom"
import "./Card.css"
import "../Home/Home.css"

export default function Card({ id, name, image, diets }) {
   return (
      <div className='card'>

         <div className="name-container">
            <h1 className="recipes-name">{name}</h1>
         </div>
         <img className="image" src={image ? image : "https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg"} alt={name} />
         <div className="diets-card-container">
            <h2 className="c-diets-card">Compatible Diets:</h2>  <h2 className="diets-card">{diets?.map((d) => <p key={d.name}> {d.name}</p>)}</h2>
         </div>
         <div className="linked-ct">
            <Link className="link" to={`/recipes/${id}`}>
               <p className="link-details">
                  Learn More!
               </p>
            </Link>
         </div>
      </div>
   )
}