require("dotenv").config();
const axios = require('axios')
const {Diet,Recipe} = require('../db');
const { API_KEY } = process.env;
const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=3`

//TODO I'll need to take all the info I need from the API...


const apiInfo = async () => {
    try {
        const getter = await axios.get(url)
        const recipes = getter.data.results.map((e) => ({
            id: e.id,
            image: e.image,
            name: e.title,
            diet: e.diets
        }))
        return recipes
    } catch (err) {
        console.log("couldn't get recipes", err)
    }
}

//TODO - I should  get the DB info...

const dbInfo = async () => {
    try {
        let dbCreated = await Recipe.findAll({
            include: {
                model: Diet,
                attributes: ["name"],
                through: {
                    attributes: [],
                },
            },
        });
        return dbCreated
    } catch (error) {
        return error;
    }
};

//TODO - join or concat All info in one function

const recipes = async () => {
    const apiRecipes = await apiInfo()
    const dbRecipes = await dbInfo()
    const allRecipes = apiRecipes.concat(dbRecipes);
    return allRecipes;
}

// TODO - get the data by name (req query)

const recipesByName = async (req, res) => {
    let name = req.query.name;
    let recipe = await recipes()
    try {
        if (name) {
            let getName = recipe.filter((r) => r.name.toLowerCase().includes(name.toLowerCase()))
            res.status(200).send(getName)
        } else {
            res.status(200).send(recipe)
        }
    } catch (error) {
        res.status(404).send('no recipe found with that name',error)
    }
}



module.exports = { recipes, recipesByName }