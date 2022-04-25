/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex('resources').insert([
    {
      resource_name: "Will's notions",
      resource_description: 'literally make anything',
    },
    {
      resource_name: 'Google',
      resource_description: 'you know how to use it',
    },
  ]);
};
