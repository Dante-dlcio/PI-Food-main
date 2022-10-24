import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getRecipes } from "../../Redux/Actions"
import Card from "../Card/Card"
import NavBar from "../NavBar/NavBar";



export default function Home() {
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes)

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);
    return (
        <>
            <div><NavBar /></div>
            {recipes?.map((r) => {
                return (
                    <Card
                        key={r.id}
                        id={r.id}
                        name={r.name}
                        image={r.image}
                        diets={r.diets}
                    />
                )
            })}
        </>
    )
}