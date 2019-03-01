
exports.up = function(knex, Promise) {
    return knex.schema.table('actions', function(tbl) {
        tbl.integer('projectID')
            .unsigned()
        tbl.foreign('projectID')
            .references('id')
            .on('projects');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};