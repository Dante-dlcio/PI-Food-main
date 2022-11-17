import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRecipeById, clearState, loader } from "../../Redux/Actions";
import { Link, useParams } from "react-router-dom";
import "./Detail.css";
import "../SearchBar/SearchBar.css";



export default function Detailed() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const details = useSelector((state) => state.recipe);

    useEffect(() => {
        dispatch(getRecipeById(id));
        dispatch(clearState());
    }, []);

    return (
        <>

            <div className="details-background">
                <div>
                    <Link to={"/home"}>
                        <button className="btn">Back to Home</button>
                    </Link>
                    <h1 className="recipes-name">{details.name}</h1>
                    <div className="img-container">
                        <img
                            className="det-img"
                            src={
                                details.image
                                    ? details.image
                                    : "https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg"
                            }
                            alt="img not found"
                        />
                    </div>
                    <div className="det-data-container">
                        <div className="detail-grid">
                            <h3 className="c-diets-card"> Diets: <p className="diets-card">{details.diets?.map((d) => <p>{d}</p>)}</p> </h3>
                            <h3 className="c-diets-card">
                                Dish type: <p className="diets-card">{details.dishType?.map((dt) => <p>{dt.name}</p>)}</p>
                            </h3>
                            <h3 className="c-diets-card">
                                Health Score :
                                <p className="diets-card"> {details.healthScore}</p>
                            </h3>
                        </div>
                    </div>
                    <div className="sum-sbs-ctn">
                        <div className="wrapper-text-summary">
                            <h2 className="sum-sbs-t">
                                Summary:
                                <p className="sum-sbs">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: details?.summary }}
                                    ></div>
                                </p>
                            </h2>
                            <h2 className="sum-sbs-t">
                                Step by step:
                                <p className="sum-sbs">{details.stepByStep}</p>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}