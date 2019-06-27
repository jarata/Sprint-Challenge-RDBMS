
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {id: 1, actionDescription: 'Action 1', notes: 'Actions notes1', projectID: 1, completed: false},
        {id: 2, actionDescription: 'Action 2', notes: 'Actions notes2', projectID: 2, completed: false},
        {id: 3, actionDescription: 'Action 3', notes: 'Actions notes3', projectID: 3, completed: false}
      ]);
    });
};
