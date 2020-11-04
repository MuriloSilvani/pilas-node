
exports.up = function (knex) {
  return knex.schema.createTable('launches', function (table) {
    table.increments('_id').primary()
    table.boolean('type').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()
    table.integer('category_id').notNullable()
    table.foreign('category_id').references('_id').inTable('categories')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('launches')
}
