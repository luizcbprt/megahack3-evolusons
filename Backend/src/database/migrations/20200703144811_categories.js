
exports.up = function(knex) {
    return knex.schema.createTable('categories', function (t) {
        t.increments();
        t.string('title').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('categories');
};
