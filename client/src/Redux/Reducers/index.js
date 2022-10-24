const initialState = {
    recipes: [],
    recipe: {},
    diets: [],
    filters: {
        byDiet: ""
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_RECIPES":
            return {
                ...state,
                recipes: action.payload,
            }

        case "GET_DIETS":
            return {
                ...state,
                diets: action.payload,
            }

        case "GET_RECIPES_BY_ID":
            return {
                ...state,
                recipe: action.payload,
            }

        case "GET_RECIPES_BY_NAME":
            return {
                ...state,
                recipes: action.payload
            }

        case "FILTER_BY_DIET":
            return {
                ...state,
                filters: { ...state.filters, byDiet: action.payload }
            }

        default:
            return state;


    }


}