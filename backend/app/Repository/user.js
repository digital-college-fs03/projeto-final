import bcrypt from 'bcrypt'
import { queryBuilder } from '../../config/database.js'

const table = 'users'

export async function findByUsername (username) {
    // busca o usuário no banco
    const user = await queryBuilder
        .select('id', 'username', 'password')
        .from(table)
        .where('username', username)
        .first()
    // retorna o usuário encontrado
    return user
}

export async function create (username, password) {
    // gera o hash da senha
    const hashedPassword = bcrypt.hashSync(password, 10)
    // prepara um usuário para ser criado
    const newUser = {
        username,
        password: hashedPassword,
    }
    // insere o usuário no banco e retorna os ids gerados
    const ids = await queryBuilder
        .insert(newUser)
        .into(table)
    // retorna o primeiro id gerado
    return ids.shift()
}