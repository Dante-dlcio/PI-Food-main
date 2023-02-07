const { UniqueConstraintError } = require("sequelize");
const { Recipe, Diet } = require("../db")


const postRecipe = async ({
    name,
    summary,
    healthScore,
    stepByStep,
    diets,
    created
}) => {
    try {
        const properties = await [name, summary, healthScore, stepByStep, diets, created];
        if (Object.values(properties).some(val => !val)) {
            throw Error("incomplete data")
        }
        const dietsList = await Diet.findAll({ where: { name: diets } })
        const recipeCreate = await Recipe.create({
            name,
            summary,
            healthScore,
            stepByStep,
            created
        });
        await recipeCreate.setDiets(dietsList);
        const recipe = await Recipe.findOne({
            where: { id: recipeCreate.id },
            include: [{ model: Diet }]
        });
        return {
            message: 'Recipe Created',
            recipe: recipe
        }
    } catch (error) {
        if (UniqueConstraintError)
            throw { msg: "recipe already exists" }
        throw (error)
    }

}

module.exports = { postRecipe }