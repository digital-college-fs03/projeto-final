import knex from 'knex'

export const queryBuilder = knex({
  client: 'mysql2',
  connection: {
    host: 'devi.tools',
    port: 3360,
    database: 'database',
    user: 'root',
    password: 'root',
  }
})
