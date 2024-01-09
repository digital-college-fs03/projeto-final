import { Request, Response } from 'express'
import { connection } from '../../config/database'

export async function FindUser(request: Request, response: Response) {
    const { username } = request.query
    const db = connection()
    const users = await db
        .select('id', 'username')
        .from('users')
        .where('username', 'like', `%${username}%`)
    response
        .status(200)
        .json({ status: 'success', data: users })
}
