const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRoute = require("./recipesRoute")
const dietsRoute = require("./dietsRoute")
const detailsRoute = require("./detailsRoute")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/recipes", recipesRoute)
router.use("/recipes", detailsRoute)
router.use("/diets", dietsRoute)


module.exports = router;
