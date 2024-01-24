import * as express from 'express'
import { Application } from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'

import { loadEnv } from './config/env'
import { FindUser, SignIn, Subscribe } from './src/Controller/User'
import { CadastrarProduto, RecuperarProdutos } from './src/Controller/Produto'

const app: Application = express()

loadEnv()

app.use(bodyParser.json())
app.use(cors({
  credentials: true,
  origin: String(process.env.BACKEND_ORIGIN).split(','),
}))

app.post('/api/v1/login', SignIn)
app.post('/api/v1/public/users', Subscribe)
app.get('/api/v1/users', FindUser)

app.post('/api/v1/produtos', CadastrarProduto)
app.get('/api/v1/produtos', RecuperarProdutos)

// inicia o servidor na porta 5174
app.listen(
  5174,
  () => console.log('O servidor está rodando na porta http://localhost:5174'),
)
