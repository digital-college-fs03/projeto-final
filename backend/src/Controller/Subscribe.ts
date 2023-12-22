import { Request, Response } from 'express'
import { connection } from '../../config/database'
import { hash } from 'bcrypt'

export async function Subscribe (request: Request, response: Response) {
    // pega do request os dados que o usuário enviou
    const { username, password } = request.body
    // conecta ao banco de dados
    const db = connection()
    // busca um possível usuário com mesmo username
    const exists = await db
        .select('id')
        .from('users')
        .where('username', username)
        .first()

    // se existir, retorna um erro
    if (exists) {
        response
            .status(409)
            .json({ status: 'error', message: 'Username already exists' })
        return
    }

    // gera um hash da senha do usuário
    const hashedPassword = await hash(password, 10)
    // insere um novo usuário no banco de dados
    const inserted = await db
        .into('users')
        .insert({ username, password: hashedPassword })
    // pega o id do usuário inserido
    const id = inserted.shift()
    // retorna o usuário inserido
    response
        .status(200)
        .json({ status: 'success', data: { id, username } })
}
