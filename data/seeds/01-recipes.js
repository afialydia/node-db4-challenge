exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("recipes")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("recipes").insert([
				{  recipe_name: "Mexican Egg Scramble", description:"Take some south of the border inspiration for this healthy egg breakfast that comes with a fiber-rich boost from beans."},
				{ recipe_name: "1-Minute Eggs", description:"The fastest way to cook an easy healthy egg breakfast is with your microwave. (If you're feeding a crowd, make a dozen hard-boiled eggs at once with this muffin pan hack.)" },
				{  recipe_name: "Poached Eggs", description:"A perfectly-poached egg makes a delicious garnish on a slice of whole-grain toast—topped with avocado, natch. And since it's cooked in water, poaching is a very healthy egg breakfast option. Make sure to use a fresh egg since fresher eggs hold their shapes better. (Mix up your a.m. eats with these egg-free, high-protein breakfast recipes.)" }
			]);
		});
};
