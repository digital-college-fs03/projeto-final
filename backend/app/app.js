// importa o json-server da pasta node_modules
import server from 'json-server'

// cria o servidor que vai rodar na porta 5174 e lidar com os requests
const app = server.create()
// cria um middleware que trata necessidades comuns de uma API
const middlewares = server.defaults()

// adiciona o middleware e o parser de json ao servidor
app.use(middlewares)
app.use(server.bodyParser)

export { app, server }
