
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe_id: 1, step_number: 1, step: "Scramble 2 eggs with 1/4 cup canned black beans (rinsed and drained) and 1 ounce reduced-fat cheddar cheese."},
        {recipe_id: 1, step_number: 2, step: "Top with 2 tablespoons salsa, or to taste."},
        {recipe_id: 2, step_number: 1, step:"at a raw egg with milk, pour into a microwave-safe mug, and heat for 60 seconds." },
        {recipe_id: 2, step_number: 2, step: "Season with herbs or spices, if desired." },
        {recipe_id: 3, step_number: 1, step: "Crack egg into a dish. Bring a medium saucepan of water to boil; reduce heat to low. Add a tablespoon of vinegar, then stir the water to create a vortex." },
        {recipe_id: 3, step_number: 2, step: "Pour the egg into the center of the vortex and cook for three minutes, or until the yolk reaches your desired doneness." }
        
      ]);
    });
};
