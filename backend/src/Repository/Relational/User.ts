import { connection } from '../../../config/knex'
import { hash } from 'bcrypt'

/**
 * Pesquisa por um usuário pelo username
 *
 * @param username
 * @param like
 */
export async function findUserByUsername(username: string, like: boolean = false) {
  // cria uma nova conexão com o banco de dados usando o knex
  const db = connection()
  // testa se é para usar o like como operador...
  let operator = '='
  if (like) {
    // ... se for para usar configura as variáveis
    operator = 'like'
    username = `%${username}%`
  }
  // monta a query usando o query build
  return db
    .select('id', 'username')
    .from('users')
    .where('username', operator, username)
    .first()
}

/**
 * Cria um novo usuário no banco de dados usando o knex
 *
 * @param username
 * @param password
 */
export async function createUser (username: string, password: string) {
  // gera um hash da senha do usuário
  const hashedPassword = await hash(password, 10)
  // conecta ao banco de dados
  const db = connection()
  // insere um novo usuário no banco de dados
  const inserted = await db
    .into('users')
    .insert({ username, password: hashedPassword })
  // extrai o id do usuário inserido
  return inserted.shift()
}
