const{ Router } = require('express');
const{createRecipe} = require('../controllers/createRecipe')
const router = Router();

router.post('/createRecipe', createRecipe)