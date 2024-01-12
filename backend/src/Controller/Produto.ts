import { Request, Response } from 'express'
import { connection } from '../../config/database'

export async function CadastrarProduto(request: Request, response: Response) {
    const produto = { ...request.body }
    // configurar timestamps
    produto.data_criacao = new Date()
    produto.data_alteracao = null

    const db = connection()
    const result = await db
        .insert(produto)
        .into('produtos')

    const id = result.shift()
    
    response.json({
        status: 'success',
        data: {
            id,
            ...produto
        }
    })
}
