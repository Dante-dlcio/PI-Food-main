import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getRecipeById } from "../../Redux/Actions"
import { Link, useParams } from "react-router-dom"
import "./Detail.css"

export default function Detailed() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const details = useSelector((state) => state.recipe)

    useEffect(() => {
        dispatch(getRecipeById(id));
        return () => {
            console.log("hola")
        }
    }, []);
    return (
        <>
            <div className="details-background">
                <Link to={"/home"}>
                    <div>
                        <h1 className="det-name">{details.name}</h1>
                        <div className="img-container">
                            <img className="det-img" src={details.image ? details.image : "https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg"} alt="img not found" />
                        </div>
                        <div className="det-data-container">
                            <div className="detail-grid">
                                <h3> Diets: <p>{details.diets}</p></h3>
                                <h3>Dish type: <p>{details.dishType}</p></h3>
                                <h3>Health Score : {details.healthScore}</h3>
                            </div>
                        </div>
                        <h2>Summary:<p><div dangerouslySetInnerHTML={{ __html: details?.summary }}></div></p> <div dangerouslySetInnerHTML={{ __html: details?.summary }}></div></h2>
                        <h2> <h2>Step by step:</h2> {details.stepByStep}</h2>
                    </div>
                </Link>
            </div>
        </>
    )
}


