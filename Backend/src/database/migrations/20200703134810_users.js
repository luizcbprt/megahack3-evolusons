
exports.up = function(knex) {
    return knex.schema.createTable('users', function (t) {
        t.increments('id').primary();
        t.string('email').notNullable();
        t.string('name').notNullable();
        t.string('category').notNullable().references('title')
        .inTable('categories');
        t.string('password').notNullable();
        t.integer('points').notNullable().defaultTo(0);
        
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
