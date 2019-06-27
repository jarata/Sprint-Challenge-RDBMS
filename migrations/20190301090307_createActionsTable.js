
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl) {
        tbl.increments();
        tbl.string('actionDescription', 128)
            .notNullable();
        tbl.string('notes', 128);
        tbl.boolean('completed')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions')
};