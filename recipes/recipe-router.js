const router = require("express").Router();

const Recipes = require("./recipes-model.js");

router.get("/", (req, res) => {
	Recipes.getRecipes()
		.then(recipes => {
			res.json(recipes);
		})
		.catch(err => {
			res.status(500).json({ message: "Failed to get ingredients" });
		});
});


module.exports = router;
