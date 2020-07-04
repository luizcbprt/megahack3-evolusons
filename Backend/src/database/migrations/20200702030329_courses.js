
exports.up = function(knex) {
    return knex.schema.createTable('courses', function (t) {
        t.increments('id');
        t.string('title').notNullable();
        t.string('point').defaultTo(0);
        t.string('category')
        .notNullable()
        .references('title')
        .inTable('categories');

        t.string('duration').notNullable();
        t.string('body').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('courses');
};
