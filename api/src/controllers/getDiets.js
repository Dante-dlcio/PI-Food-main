const { Diet } = require("../db");



const diets = ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"]
const bulkedData = async () => {
    try {
       let dbDiets = diets.map((e)=>({
             
            name: e.toLowerCase()
        }))
        await Diet.bulkCreate(dbDiets);
        console.log('Bulked Data')
    } catch (error) {
        console.log("couldn't bulk diets", error)
    }

}

const getDiets = async (req, res) => {
    try {
       let resp = await Diet.findAll();
        res.status(200).send(resp);
    } catch (error) {
        res.status(404).send(error)
    }
}



module.exports = { bulkedData, getDiets }

