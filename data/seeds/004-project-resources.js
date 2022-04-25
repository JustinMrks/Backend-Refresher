/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex('project_resources').insert([
    {
      project_id: 1,
      resource_id: 1,
    },
    {
      project_id: 1,
      resource_id: 2,
    },
  ]);
};
