import { Request, Response } from 'express'
import { ParsedQs } from 'qs'
import { criarProduto, pesquisarProdutos } from '../Repository/Relational/Produto'
// import { criarProduto, pesquisarProdutos } from '../Repository/NoSQL/Produto'

/**
 * Cadastra um produto no banco de dados
 *
 * @param {Request} request
 * @param {Response} response
 */
export async function CadastrarProduto (request: Request, response: Response) {
  // extrai os dados do produto do request
  const produto = { ...request.body }
  // cria um novo produto no banco de dados
  const id = await criarProduto(produto)
  // responde com o produto inserido
  response.json({
    status: 'success',
    data: {
      id,
      ...produto,
    },
  })
}

/**
 * Recupera um produto do banco de dados
 *
 * @param {Request} request
 * @param {Response} response
 */
export async function RecuperarProdutos (request: Request, response: Response) {
  // extrai o nome do produto da query
  let { nome, page, perPage } = request.query
  // calcula o offset e o limit para a paginação
  const { offset, limit } = calcularPaginacao(page, perPage)
  nome = typeof nome === 'string' ? nome : ''
  // recupera os produtos do banco de dados
  const produtos = await pesquisarProdutos(offset, limit, nome)
  // responde com os produtos recuperados
  response.json({
    status: 'success',
    data: produtos,
  })
}

/**
 * Calcula o offset e o limit para a paginação
 *
 * @param {string | string[] | ParsedQs | ParsedQs[]} page
 * @param {string | string[] | ParsedQs | ParsedQs[]} perPage
 */
function calcularPaginacao (
  page: string | string[] | ParsedQs | ParsedQs[],
  perPage: string | string[] | ParsedQs | ParsedQs[],
) {
  const limit = typeof perPage === 'string' ? Number(perPage) : 10
  const p = typeof page === 'string' ? Number(page) : 1
  const offset = typeof page === 'string' ? (p - 1) * limit : 0
  return { offset, limit }
}
