exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("recipe_ingredients")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("recipe_ingredients").insert([
				{
					recipe_id: 1,
					ingredient_id: 1,
					quantity: "1 egg"
				},
				{
					recipe_id: 1,
					ingredient_id: 5,
					quantity: "1 cup"
				},
				{
					recipe_id: 1,
					ingredient_id: 6,
					quantity: "1 oz"
        },
        {
					recipe_id: 1,
					ingredient_id: 7,
					quantity: "2 tbsp"
        },
        {
					recipe_id: 2,
					ingredient_id: 1,
					quantity: "1"
				},
				{
					recipe_id: 2,
					ingredient_id: 3,
					quantity: "a dash"
				},
				{
					recipe_id: 2,
					ingredient_id: 4,
					quantity: "to taste"
        },
        {
					recipe_id: 3,
					ingredient_id: 1,
					quantity: "2"
        },
        {
					recipe_id: 3,
					ingredient_id: 2,
					quantity: "1 tbsp"
				}
			]);
		});
};
