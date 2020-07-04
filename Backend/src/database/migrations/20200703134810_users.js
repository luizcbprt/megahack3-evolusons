
exports.up = function(knex) {
    return knex.schema.createTable('users', function (t) {
        t.increments('id').primary();
        t.string('email').notNullable();
        t.string('photo');
        t.string('name').notNullable();
        t.string('category').notNullable().references('title')
        .inTable('categories');
        t.string('password').notNullable();
        t.integer('points').defaultTo(0);
        t.string('number').notNullable();
        
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
