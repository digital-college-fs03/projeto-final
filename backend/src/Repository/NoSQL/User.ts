import { connection } from '../../../config/mongodb'
import { hash } from 'bcrypt'

/**
 * Pesquisa por um usuário pelo username
 *
 * @param username
 * @param like
 */
export async function findUserByUsername(username: string, like: boolean = false) {
  // cria uma nova conexão com o banco de dados usando o knex
  const db = await connection()
  // testa se é para usar o like como operador...
  const filter: Record<string, unknown> = { username }
  if (like) {
    // ... se for para usar configura as variáveis
    filter.username = { $regex : username }
  }
  // monta a query usando o query builder do mongodb
  return db
    .collection('users')
    .findOne(filter, { projection: { _id: 1, username: 1 } })
}

/**
 * Cria um novo usuário no banco de dados usando o mongodb
 *
 * @param username
 * @param password
 */
export async function createUser (username: string, password: string) {
  // gera um hash da senha do usuário
  const hashedPassword = await hash(password, 10)
  // conecta ao banco de dados
  const db = await connection()
  // insere um novo usuário no banco de dados
  const result = await db
    .collection('users')
    .insertOne({ username, password: hashedPassword })
  // extrai o id do usuário inserido
  return result.insertedId
}
