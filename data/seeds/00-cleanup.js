/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del();
  await knex('tasks').del();
  await knex('resources').del();
  await knex('project_resources').del();
};
