/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  return knex('tasks').insert([
    {
      task_description: 'learn how to make a backend',
      task_notes: 'make seeds',
      completed: 0,
      project_id: 1,
    },
    {
      task_description: 'learn how to make seeds',
      task_notes: 'follow the tutorial',
      completed: 0,
      project_id: 1,
    },
  ]);
};
