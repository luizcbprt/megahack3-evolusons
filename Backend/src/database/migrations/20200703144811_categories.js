
exports.up = function(knex) {
    return knex.schema.createTable('categories', function (t) {
        t.string('title').notNullable().primary();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('categories');
};
