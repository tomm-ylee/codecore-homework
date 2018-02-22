
exports.up = function(knex) {
  return knex.schema.createTable('cohorts', table => {
    table.increments('id');
    table.string('cohort_name');
    table.string('members');
    table.string('logo_url');
    table.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('cohorts');
};
