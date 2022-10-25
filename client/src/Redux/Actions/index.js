import axios from "axios"

//Action creators for routes:


export function getRecipes() {
    return async (dispatch) => {
        let json = await axios.get("http://localhost:3001/recipes")
        return dispatch({
            type: "GET_RECIPES",
            payload: json.data,
        });
    };
}
//! Promisified filter
// export function getRecipes() {
//     return async (dispatch) => {
//         await axios.get("http://localhost:3001/recipes")
//             .then((r) => r.json())
//             .then((json) => {
//                 return dispatch({
//                     type: "GET_RECIPES",
//                     payload: json.data,
//                 })
//             })
//     }
// }

export function getDiets() {
    return async (dispatch) => {
        let json = await axios.get("http://localhost:3001/diets")
        return dispatch({
            type: "GET_DIETS",
            payload: json.data,
        });
    };
}

export function getRecipeById(id) {
    return async (dispatch) => {
        let json = await axios.get(`http://localhost:3001/recipes/${id}`)
        return dispatch({
            type: "GET_RECIPES_BY_ID",
            payload: json.data,
        });
    };
}

export function getRecipeByName(name) {
    return async (dispatch) => {
        let json = await axios.get(`http://localhost:3001/recipes?name=${name}`)
        return dispatch({
            type: "GET_RECIPES_BY_NAME",
            payload: json.data,
        });
    };
}

export function postRecipe(payload) {
    return async function () {
        let json = await axios.post("http://localhost:3001/recipes/createRecipe", payload)
        return json;
    }
}

export function setDietFilter(filter) {
    return async (dispatch) => {
        return dispatch({
            type: "FILTER_BY_DIET",
            payload: filter,
        })
    }
}


export function setOrders(orders) {
    return async (dispatch) => {
        return dispatch({
            type: "SET_ORDERS",
            payload: orders
        })
    }
}

export function setPage(page) {
    return async function (dispatch) {
        return dispatch({
            type: "SET_PAGE",
            payload: page
        })
    }
}

export function previousPage() {
    return async function (dispatch) {
        return dispatch({
            type: "PREVIOUS_PAGE",
        });
    };
}

export function nextPage() {
    return async function (dispatch) {
        return dispatch({
            type: "NEXT_PAGE",

        });
    };
}