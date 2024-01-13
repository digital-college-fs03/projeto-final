import { Request, Response } from 'express'
import { connection } from '../../config/database'

export function CadastrarProduto(request: Request, response: Response) {
    const produto = request.body
    const db = connection()
    db
       .insert(produto)
       .into('produtos')
    /*   
    INSERT INTO produtos (
        data_alteracao,
        data_criacao,
        name,
        categoria,
        oferta,
        genero,
        preco,
        valor_com_desconto
    )
    VALUES (
        ?
    )
     */

    response.send('Olá')
}