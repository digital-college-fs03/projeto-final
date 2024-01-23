import knex from 'knex'
import { loadEnv } from './env'

export function connection() {
    loadEnv()

    return knex({
        client: process.env.BACKEND_KNEX_CLIENT || 'mysql2',
        connection: {
            host: process.env.BACKEND_KNEX_HOST || 'localhost',
            port: parseInt(process.env.BACKEND_KNEX_PORT || '3306'),
            database: process.env.BACKEND_KNEX_DATABASE || 'backend',
            user: process.env.BACKEND_KNEX_USER || 'root',
            password: process.env.BACKEND_KNEX_PASSWORD || 'root',
        }
    })
}
