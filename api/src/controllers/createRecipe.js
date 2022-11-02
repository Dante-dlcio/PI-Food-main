const { Recipe, Diet } = require("../db")

const createRecipe = async (req, res) => {
    try {

        const { name, summary, healthScore, stepByStep, diets, created } = req.body;
        let results = await Recipe.create({
            name,
            summary,
            healthScore,
            stepByStep,
            created
        });
        diets.forEach(async (d) => {
            let dietId = await Diet.findAll({ where: { name: d } })
            results.addDiet(dietId);
        })
        res.status(201).send({
            msg: "Recipe Created",
            results
        });

    } catch (error) {
        console.log(error);
        res.status(404).send("Couldn't find diets")
    };
};





module.exports = { createRecipe }