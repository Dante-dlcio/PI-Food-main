const initialState = {
    recipes: [],
    recipe:{},
    diets: [],
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
                return{
                    ...state,
                    recipe: action.payload,
                }

        default:
            return state;


    }


}