import { connection } from '../../../config/mongodb'

/**
 * Cria um produto no banco de dados
 *
 * @param produto
 */
export async function criarProduto (produto: Record<string, unknown>) {
  // configurar timestamps
  produto.data_criacao = new Date()
  produto.data_alteracao = null
  // conecta ao banco de dados
  const db = await connection()
  // insere o produto no banco de dados
  const result = await db
    .collection('produtos')
    .insertOne(produto)
  // extrai o id do produto inserido
  return result.insertedId
}

/**
 * Recupera os produtos do banco de dados
 *
 * @param {number} offset
 * @param {number} limit
 * @param {string} nome
 */
export async function pesquisarProdutos (offset: number = 0, limit: number = 0, nome: string = '') {
  // conecta ao banco de dados
  const db = await connection()
  // se o nome for informado, filtra pelo nome...
  const filter: Record<string, unknown> = {}
  if (nome) {
    // ... adiciona o filtro pelo nome do produto
    filter.nome = { $regex : nome }
  }
  // constrói a query base
  const query = db
    .collection('produtos')
    // .find(filter, { projection: { _id: 0 } }) // pode ser usado para ocultar o _id
    .find(filter)
  // retorna os produtos recuperados aplicando o offset e o limit
  return query
    .skip(offset)
    .limit(limit)
    .toArray()
}
