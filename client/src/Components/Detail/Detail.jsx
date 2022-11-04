import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getRecipeById, clearState } from "../../Redux/Actions"
import { Link, useParams } from "react-router-dom"
import "./Detail.css"
import "../SearchBar/SearchBar.css"

export default function Detailed() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const details = useSelector((state) => state.recipe)

    useEffect(() => {
        dispatch(getRecipeById(id));
        dispatch(clearState())
    }, [dispatch]);
    return (
        <>
            <div className="details-background">
                <div>
                    <Link to={"/home"}>
                        <button className="btn">Back to Home</button>
                    </Link>
                    <h1 className="recipes-name">{details.name}</h1>
                    <div className="img-container">
                        <img className="det-img" src={details.image ? details.image : "https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg"} alt="img not found" />
                    </div>
                    <div className="det-data-container">
                        <div className="detail-grid">
                            <h3 className="diet-det"> Diets: <p className="diet-det">{details.diets}</p></h3>
                            <h3 className="dish-type-det">Dish type: <p>{details.dishType}</p></h3>
                            <h3 className="health-score-det">Health Score : {details.healthScore}</h3>
                        </div>
                    </div>
                    <h2>Summary:<p><div dangerouslySetInnerHTML={{ __html: details?.summary }}></div></p> <div dangerouslySetInnerHTML={{ __html: details?.summary }}></div></h2>
                    <h2> <h2>Step by step:</h2> {details.stepByStep}</h2>
                </div>
            </div>
        </>
    )
}


