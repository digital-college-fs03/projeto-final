import { MongoClient } from 'mongodb'
import { loadEnv } from './env'

export async function connection() {
    loadEnv()

    const host = process.env.BACKEND_MONGO_HOST
    const port = process.env.BACKEND_MONGO_PORT
    const user = process.env.BACKEND_MONGO_USER
    const password = process.env.BACKEND_MONGO_PASSWORD
    const database = process.env.BACKEND_MONGO_DATABASE

    const url = `mongodb://${user}:${password}@${host}:${port}`
    const client = new MongoClient(url)

    const connection = await client.connect()
    return connection.db(database)
}
