import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Produto from 'App/Models/Produto'

export default class ProdutosController {
  public async create({ request }: HttpContextContract) {
    const data = request.only(['nome', 'preco'])
    const produto = Produto.create(data)
    return {
      status: 'success',
      data: produto
    }
  }

  public async read({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
