const {Recipe,Diet} = require("../db")

const createRecipe = async (req,res) => {
    try {
        const {name, summary, healthScore, stepByStep, diet} = req.body;
        let results = await Recipe.create({
            name,
            summary,
            healthScore,
            stepByStep,
            diet
        });
    } catch (error) {
        
    }
}





module.exports = { createRecipe}