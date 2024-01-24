import { Request, Response } from 'express'
import * as bcrypt from 'bcrypt'
import { createUser, findUserByUsername } from '../Repository/Relational/User'
// import { createUser, findUserByUsername } from '../Repository/NoSQL/User'

/**
 * Cria um usuário
 *
 * @param {Request} request
 * @param {Response} response
 */
export async function Subscribe (request: Request, response: Response) {
  // pega do request os dados que o usuário enviou
  const { username, password } = request.body
  // busca um possível usuário com mesmo username
  const exists = await findUserByUsername(username)
  // se existir, retorna um erro
  if (exists) {
    response
      .status(409)
      .json({ status: 'error', message: 'Username already exists' })
    return
  }
  // se não, cria o usuário
  const id = await createUser(username, password)
  // retorna o usuário inserido
  response
    .status(200)
    .json({ status: 'success', data: { id, username } })
}

/**
 * Cria uma sessão de login para um usuário
 *
 * @param {Request} request
 * @param {Response} response
 */
export async function SignIn (request: Request, response: Response) {
  // pega os dados do request
  const { username, password } = request.body
  // busca os usuários no banco
  const user = await findUserByUsername(username)
  // verifica se o usuário existe e se a senha está correta
  if (user && bcrypt.compareSync(password, user.password)) {
    response
      .status(200)
      .json({ status: 'success', data: { username: user.username } })
    return
  }
  // se não, retorna um erro
  response
    .status(401)
    .json({ status: 'error', message: 'Invalid credentials' })
}

/**
 * Busca um usuário usando os filtros informados via query string
 *
 * @param {Request} request
 * @param {Response} response
 */
export async function FindUser (request: Request, response: Response) {
  const { username } = request.query
  const users = await findUserByUsername(String(username))

  response
    .status(200)
    .json({ status: 'success', data: users })
}
