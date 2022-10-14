const{ Router } = require('express');
const { recipesByName} = require('../controllers/getRecipes')
const router = Router();


router.get('',recipesByName)

module.exports = router