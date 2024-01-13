// importa o json-server e o bcrypt da pasta node_modules
import * as jsonServer from 'json-server'
import { JsonServerRouter } from 'json-server'
import * as bodyParser from 'body-parser'
import * as bcrypt from 'bcrypt'
import { loadEnv } from './config/env'
import { connection } from './config/database'

import { Subscribe } from './src/Controller/Subscribe'
import { FindUser } from './src/Controller/User'
import { CadastrarProduto } from './src/Controller/CadastrarProduto'

loadEnv()

// declara a estrutura da entidade usuário
interface User {
  id: number;
  username: string;
  password: string;
}

// declara a estrutura do banco que está sendo usado pelo json-server
interface Database {
  users: User[];
}

// cria o servidor que vai rodar na porta 5174 e lidar com os requests
const app = jsonServer.create()
// cria um router para lidar com as requisições padrão do json-server
const router = jsonServer.router('db.json') as JsonServerRouter<Database>
// cria um middleware que trata necessidades comuns de uma API
const middlewares = jsonServer.defaults()

// adiciona o middleware e o parser de json ao servidor
app.use(middlewares)
app.use(bodyParser.json())

// cria um endpoint para o login
app.post('/api/v1/login', async (request, response) => {
  // pega os dados do request
  const { username, password } = request.body
  // busca os usuários no banco
  const user = await connection()
    .select('id', 'username', 'password')
    .from<User>('users')
    .where('username', username)
    .first()
  // verifica se o usuário existe e se a senha está correta
  if (user && bcrypt.compareSync(password, user.password)) {
    response
      .status(200)
      .json({ status: 'success', data: { username: user.username } })
    return
  }
  // se não, retorna um erro
  response
    .status(401)
    .json({ status: 'error', message: 'Invalid credentials' })
})
 
app.post('/api/v1/public/users', Subscribe)

app.post('/api/v1/produtos', CadastrarProduto )

app.get('/api/v1/produtos', RecuperaProdutos )

app.get('/api/v1/users', FindUser)

// registra o middleware das rotas padrão do json-server
app.use(router)

// inicia o servidor na porta 5174
app.listen(5174, () => console.log('O servidor está rodando na porta http://localhost:5174'))
