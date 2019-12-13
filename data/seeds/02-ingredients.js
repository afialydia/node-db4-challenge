
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, Ingredient: 'egg'},
        {id: 2, Ingredient: 'vinegar'},
        {id: 3, Ingredient: 'milk'},
        {id: 4, Ingredient: 'herbs'},
        {id: 5, Ingredient: 'black beans'},
        {id: 6, Ingredient: 'cheese'},
        {id: 7, Ingredient: 'salsa'}
      ]);
    });
};
