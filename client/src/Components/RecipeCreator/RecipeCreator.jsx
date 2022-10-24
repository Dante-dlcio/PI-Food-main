import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { postRecipe, getDiets } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";


const validate = {
    name: {
        condition: (name) => !!name,
        message: "This input cannot be empty, how is the name of your recipe",
    },
    summary: {
        condition: (summary) => !!summary,
        message: "This input cannot be empty, please tell us about your recipe"
    },
    healthScore: {
        condition: (healthScore) => healthScore && healthScore > 0 && healthScore >= 100,
        message: "Please insert a number from 1 to 100",
    },
    stepByStep: {
        condition: (stepByStep) => !!stepByStep,
        message: "Please insert each step of your recipe",
    },
    diets: {
        condition: (diets) => diets.length,
        message: "you need to choose which diets are compatible with your recipe"
    }

};


export default function RecipeCreator() {
    const dispatch = useDispatch();
    const diets = useSelector((state) => state.diets);
    useEffect(() => {
        dispatch(getDiets())
    }, [dispatch])

    let [errors, setErrors] = useState({});
    let [input, setInput] = useState({
        name: "",
        summary: "",
        healthScore: 0,
        stepByStep: "",
        diets: []
    });

    function handleOnChange(e) {
        let field = e.target.name;
        let value = e.target.value;
        let isValid = validate[field].condition;
        let message = validate[field].message;
        setInput({
            ...input,
            [field]: value,
        });

        setErrors({
            ...errors,
            [field]: isValid(value) ? "" : message,
        });
        console.log(errors);
    }

    function handleSelectD(e) {
        let field = e.target.name;
        let value = e.target.value;
        let isValid = validate[field].condition;
        let message = validate[field].message;
        setInput({
            ...input,
            diets: [...input.diets, value],
        })
        setErrors({
            ...errors,
            [field]: isValid(value) ? "" : message,
        });
    }

    function handleDeleteD(diet) {
        setInput({
            ...input,
            diets: input.diets.filter((d) => d !== diet),
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (
            validate.name.condition(input.name) &&
            validate.summary.condition(input.summary) &&
            validate.healthScore.condition(input.healthScore) &&
            validate.stepByStep.condition(input.stepByStep) &&
            validate.diets.condition(input.diets)
        ) {
            dispatch(postRecipe(input));

            //TODO - try and change the alert message
            //TODO - check the problem while adding the empty diet choice and repeated diets


            alert(
                "Your recipe was created and added, look for it at home"
            );
            setInput({
                name: "",
                summary: "",
                healthScore: 0,
                stepByStep: "",
                diets: []
            })

        } else {
            alert("Please finish all fields");
        }
    }


    return (
        <div>
            <h3> Create Recipe! </h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="name"> Name </label>
                    <input
                        type="text"
                        value={input.name}
                        key="name"
                        name="name"
                        onChange={(e) => handleOnChange(e)}

                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="summary"> Summary </label>
                    <input
                        type="text"
                        value={input.summary}
                        key="summary"
                        name="summary"
                        onChange={(e) => handleOnChange(e)}

                    />
                    {errors.summary && <p>{errors.summary}</p>}
                </div>
                <div>
                    <label htmlFor="healthScore"> Health Score </label>
                    <input
                        type="number"
                        value={input.healthScore}
                        key="healthScore"
                        name="healthScore"
                        onChange={(e) => handleOnChange(e)}

                    />
                    {errors.healthScore && <p>{errors.healthScore}</p>}
                </div>
                <div>
                    <label htmlFor="stepByStep"> Step by step </label>
                    <input
                        type="text"
                        value={input.stepByStep}
                        key="stepByStep"
                        name="stepByStep"
                        onChange={(e) => handleOnChange(e)}

                    />
                    {errors.stepByStep && <p>{errors.stepByStep}</p>}
                </div>
                <div>
                    <label htmlFor="diets"> Select compatible diets </label>
                    <select onChange={(e) => handleSelectD(e)} name="diets">
                        <option key='' value='' name=''>
                            -
                        </option>
                        {diets?.map((diet) => {
                            return (
                                <option key={diet.id} value={diet.name} name={diet.name}>
                                    {diet.name}
                                </option>
                            )
                        })}
                    </select>
                    {errors.diets && <p>{errors.diets}</p>}
                    {input.diets.map((diet) => (
                        <div key={diet}>
                            <p>{diet}</p>
                            <button diet="button" onClick={() => handleDeleteD(diet)}>
                                X
                            </button>
                        </div>
                    ))}
                </div>

                <button type="submit">
                    Create your Recipe!
                </button>
            </form>
            <div>
                <Link to="/home">
                    <button> Home </button>
                </Link>
            </div>
        </div>
    )
}