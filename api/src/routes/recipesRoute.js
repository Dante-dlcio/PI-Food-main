const{ Router } = require('express');
const { recipesByName} = require('../controllers/getRecipes')
const{createRecipe} = require('../controllers/createRecipe')
const router = Router();

router.post('/createRecipe', createRecipe)
router.get('',recipesByName)

module.exports = router