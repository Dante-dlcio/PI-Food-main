require("dotenv").config();
const axios = require('axios')
const db = require('../db');
const Recipe = require("../models/Recipe");
const { API_KEY } = process.env;


const recipesDetailApi = async (id) => {
    let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`

    try {
        let response = await axios.get(url);
        let data = response.data;
        let result = {
            id: data.id,
            image: data.image,
            name: data.title,
            diets: data.diets,
            dishType: data.dishTypes,
            summary: data.summary,
            healthScore: data.healthScore,
            stepByStep: data.analyzedInstructions.map((ss) => ss.steps.map((s) => s.step)),
        }
        //console.log(result)
        return result
    } catch (err) {
        console.log("error getting recipes", err)
    }
};

const recipesDetailDb = async (id) => {
    let detailedDb = await Recipe.findAll({
        where: {id:id},
        include:{
            model: Diet,
            attributes: ["name",],
            trough: {
                attributes: [],
            }
        }
    })
    let result = {
        
    }
}