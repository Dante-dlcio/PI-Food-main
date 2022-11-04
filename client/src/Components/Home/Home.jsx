import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getRecipes } from "../../Redux/Actions"
import Card from "../Card/Card"
import NavBar from "../NavBar/NavBar";
import { Pagination } from "../Pagination/Pagination";
import "./Home.css"


const alphabetical = (a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0
}
const alphabeticalInverse = (a, b) => alphabetical(a, b) * -1;
const healthScoreAsc = (a, b) => a.healthScore - b.healthScore
const healthScoreDesc = (a, b) => b.healthScore - a.healthScore

const orderBy = [alphabetical, alphabeticalInverse, healthScoreAsc, healthScoreDesc]


export default function Home() {
    const dispatch = useDispatch();
    const { recipes, filterByDiet, orders, recipesPerPage, page } = useSelector(state => state)
    const dietsFilter = recipe => recipe.diets?.some(d => d.name === filterByDiet || !filterByDiet)
    const pagination = (_, i) => recipesPerPage * page <= i && i < recipesPerPage * (page + 1)

    useEffect(() => {
        dispatch(getRecipes());
    }, [dispatch]);
    const filteredAndOrderedRecipes = recipes?.sort(orderBy[orders])
        .filter(dietsFilter)
    return (
        <>

            <div className="home-background">
                <NavBar />
                <div className="grid-container">

                    {filteredAndOrderedRecipes &&
                        filteredAndOrderedRecipes.filter(pagination).map((r) => {
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
                </div>
                {!recipes.length && <div>
                     No recipe found, go and make it <button>
                        Reload
                     </button>
                     </div>}

                <Pagination filtered={filteredAndOrderedRecipes} />
            </div>
        </>
    )
}