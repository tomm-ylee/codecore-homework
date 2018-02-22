const sharedConfig = {
  client: 'pg',
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations'
  }
};

module.exports = {

  development: {
    ...sharedConfig,
    connection: {
      database: 'teamPicker_dev'
    }
  },

  staging: {
    ...sharedConfig,
    connection: {
      database: 'teamPicker_staging'
    }
  },

  production: {
    ...sharedConfig,
    connection: {
      database: 'teamPicker_production'
    }
  }
};
