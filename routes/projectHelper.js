const knex = require('knex');
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development);

module.exports = {
    getProjectActions
};

function getProjectActions(pID) {
    return db('actions as a')
        .join('projects as p', 'p.id', 'a.projectID')
        .select('a.id', 'a.actionDescription', 'a.notes', 'p.name')
        .where('a.projectID', pID);
}
