const { Router } = require('express');
const { recipesByName } = require('../controllers/getRecipes')
const { createRecipe } = require('../controllers/createRecipe')
const { postRecipe } = require("../controllers/postRecipe")

const router = Router();

router.post('/createRecipe', createRecipe)
router.get('', recipesByName)


router.post('/create', async (req, res) => {
    try {
        const recipeCreate = await postRecipe(req.body);
        res.status(201).send(recipeCreate)
    } catch (error) {
        res.status(400).send({ error: error });
    }
})

module.exports = router