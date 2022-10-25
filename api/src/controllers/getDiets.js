require("dotenv").config();
const axios = require('axios')
const { Diet } = require("../db");
const { API_KEY } = process.env;

const ENDPOINT = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`

const DietsFromApi = async () => {
    const recipes = await axios.get(ENDPOINT)
    let diets = recipes.data.results.map((e) => ({
        diets: e.diets,
    }))
    diets = diets.map((d) => d.diets).flat()
    diets = diets.filter((item, index) => diets.indexOf(item) === index)
    try {
        let dbDiets = diets.map((e) => ({

            name: e.toLowerCase()
        }))
        await Diet.bulkCreate(dbDiets);
        console.log('Bulked Data')
    } catch (error) {
        console.log("couldn't bulk diets", error)
    }
}


const getDiets = async (req, res) => {
    try {
        let resp = await Diet.findAll();
        res.status(200).send(resp);
    } catch (error) {
        res.status(404).send(error)
    }
}



module.exports = { DietsFromApi, getDiets }

