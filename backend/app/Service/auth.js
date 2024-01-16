import bcrypt from 'bcrypt'
import { findByUsername } from '../Repository/user.js'

export async function login (username, password) {
    // busca o usuário no banco
    const user = await findByUsername(username)
    // verifica se o usuário existe e se a senha está correta
    if (user && bcrypt.compareSync(password, user.password)) {
        const { id, username } = user
        // retorna o usuário encontrado
        return { id, username }
    }
    // se não, retorna nulo para indicar que o login falhou
    return null
}