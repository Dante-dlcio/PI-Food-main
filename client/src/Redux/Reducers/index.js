const initialState = {
    allRecipes: [],
    recipes: [],
    recipe: {},
    diets: [],
    filterByDiet: "",
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
                allRecipes: action.payload
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
            const recipes = [...state.allRecipes];
            let filteredDiets = action.payload === 'Diets' ? recipes : recipes.filter(item => {
                if (item.diets) {
                    let itemR = item.diets.find(e => e.name === action.payload);
                    if (itemR) return itemR
                }
                return false
            })

            return {
                ...state,
                page: 0,
                recipes: filteredDiets
            }

        case "SET_ORDERS":
            return {
                ...state,
                page: 0,
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
                page: state.page + 1
            }
        case "PREVIOUS_PAGE":
            return {
                ...state,
                page: state.page - 1
            }


        default:
            return state;


    }


}