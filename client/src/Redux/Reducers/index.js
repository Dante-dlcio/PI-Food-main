const initialState = {
    recipes: [],
    recipe: {},
    diets: [],
    filters: {
        byDiet: ""
    },
    orders: 0,
    page: 0,
    recipesPerPage: 9
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

        case "SET_ORDERS":
            return {
                ...state,
                orders: action.payload,
            }
        case "SET_PAGE":
            return {
                ...state,
                page: action.payload,
            }
        case "NEXT_PAGE":
            return {
                ...state,
                page: action.payload + 1
            }
        case "PREVIOUS_PAGE":
            return {
                ...state,
                page: action.payload - 1
            }


        default:
            return state;


    }


}