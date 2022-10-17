const{Router} = require('express')
const{detailedRecipes}= require('../controllers/getRecipesDetail')
const router = Router();

router.get('/:id',detailedRecipes)


module.exports = router