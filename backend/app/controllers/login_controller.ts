import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import hash from '@adonisjs/core/services/hash'

export default async function(http: HttpContext) {
  const { request, response } = http
  const { username, password } = request.only(['username', 'password'])

  const message = 'Usuário e/ou senha inválidos'
  if (!username || !password) {
    return response.forbidden({ status: 'error', message })
  }
  const user = await User.findByOrFail('email', username)

  const verified = await hash.verify(user.password, password)
  if (!verified) {
    return response.forbidden({ status: 'error', message })
  }

  const abilities = ['*']
  const options = {
    expiresIn: '30 days',
    prefix: 'oat_',
    table: 'auth_access_tokens',
    type: 'auth_token',
    tokenSecretLength: 40,
  }
  const token = await User.accessTokens.create(user, abilities, options)
  return {
    status: 'success',
    data: token,
  }
}
