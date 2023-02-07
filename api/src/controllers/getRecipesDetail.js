require("dotenv").config();
const axios = require('axios');
const { INTEGER } = require("sequelize");
const { Recipe, Diet } = require('../db');
const { API_KEY } = process.env;
const uuid = require('uuid')


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
            dishType: data.dishTypes.map((dt) => ({
                name: dt
            })),
            summary: data.summary,
            healthScore: data.healthScore,
            stepByStep: data.analyzedInstructions.map((ss) => ss.steps.map((s) => s.step)),
        }
        return result
    } catch (err) {
        console.log("error getting recipes", err)
    }
};
// DETALLES BASE DE DATOS

const recipesDetailDb = async (id) => {


    try {

        let detailedDb = await Recipe.findAll({
            where: { id: id },
            include: {
                model: Diet,
                attributes: ["name",],
                trough: {
                    attributes: [],
                }
            }
        })

        let results = {
            id: detailedDb[0].id,
            name: detailedDb[0].name,
            summary: detailedDb[0].summary,
            healthScore: detailedDb[0].healthScore,
            stepByStep: detailedDb[0].stepByStep,
            diets: detailedDb[0].diets.map((d) => d.name),
        }

        return results

    } catch (err) {
        console.log("error getting recipes", err)
    }
}

const detailedRecipes = async (req, res) => {
    try {
        const { id } = req.params;

        if (uuid.validate(id)) {
            let responseDb = await recipesDetailDb(id)
            res.status(200).send(responseDb)
        } else {
            const { id } = req.params;

            console.log("estoy en el else")
            let responseApi = await recipesDetailApi(id)
            res.status(200).send(responseApi)
        }
    } catch (error) {
        res.status(404).send('no recipe available soy el mensaje del postman')
    }
}

module.exports = { detailedRecipes }