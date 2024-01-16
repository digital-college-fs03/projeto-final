// importa o app e o server do arquivo app.js
import { app, server } from './app/app.js'
import api from './routes/api.js'

// configura as rotas da API no servidor
app.use('/api', api)

// cria um router para lidar com as requisições padrão do json-server
const router = server.router('db.json')
// registra o middleware das rotas padrão do json-server
app.use(router)

// inicia o servidor na porta 5174
app.listen(5174, () => console.log('O servidor está rodando na porta http://localhost:5174'))
