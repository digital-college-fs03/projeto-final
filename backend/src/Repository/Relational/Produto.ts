import { connection } from '../../../config/knex'

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
  const db = connection()
  // insere o produto no banco de dados
  const result = await db
    .insert(produto)
    .into('produtos')
  // extrai o id do produto inserido
  return result.shift()
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
  const db = connection()
  // constrói a query base
  const query = db
    .select()
    .from('produtos')
  // se o nome for informado, filtra pelo nome...
  if (nome) {
    // ... adiciona o filtro pelo nome do produto
    query.where('name', 'like', `%${nome}%`)
  }
  // retorna os produtos recuperados aplicando o offset e o limit
  return query
    .offset(offset)
    .limit(limit)
}
