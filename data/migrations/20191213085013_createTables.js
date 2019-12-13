exports.up = function(knex) {
	return knex.schema
		.createTable("recipes", t => {
			t.increments("id");

			t.text("recipe_name")
				.notNullable()
                .unique();
                
                t.text("description").notNullable()
		})

		.createTable("ingredients", t => {
			t.increments("id");

			t.text("Ingredient").notNullable();
		})

		.createTable("recipe_ingredients", t => {
			t.increments("id");

			t.integer("recipe_id")
				.references("recipes.id")
				.notNullable()
				.onUpdate("CASCADE")
				.onDelete("CASCADE");

			t.integer("ingredient_id")
				.unsigned()
				.references("ingredients.id")
				.notNullable()
				.onUpdate("CASCADE")
				.onDelete("CASCADE");

			t.float("quantity").notNullable();
		})

		.createTable("instructions", t => {
			t.increments("id");

			t.integer("recipe_id")
				.unsigned()
				.references("recipes.id")
				.notNullable()
				.onUpdate("CASCADE")
                .onDelete("CASCADE");
                
			t.integer("step_number").notNullable();
            
            t.text("step").notNullable();
		});
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists("instructions")
		.dropTableIfExists("recipe_ingredients")
		.dropTableIfExists("ingredients")
		.dropTableIfExists("recipes");
};
