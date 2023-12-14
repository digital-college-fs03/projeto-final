import knex from 'knex'

export function connection() {
    return knex({
        client: process.env.BACKEND_DB_CLIENT || 'mysql2',
        connection: {
            host: process.env.BACKEND_DB_HOST || 'localhost',
            port: parseInt(process.env.BACKEND_DB_PORT || '3306'),
            database: process.env.BACKEND_DB_DATABASE || 'backend',
            user: process.env.BACKEND_DB_USER || 'root',
            password: process.env.BACKEND_DB_PASSWORD || 'root',
        }
    })
}
