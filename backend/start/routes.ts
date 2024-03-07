/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import LoginController from '#controllers/login_controller'

const UserController = () => import('#controllers/user_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'

router.get('/', async () => {
  return { hello: 'world' }
})

// cria o grupo de rotas /api/v1
router.group(() => {
  // define a rota de login
  router.post('/login', LoginController)

  // cria o grupo de rotas protegidas
  router.group(() => {
    // define a rota de logout
    router.post('/logout', () => {
      return { status: 'success' }
    })

    // define as rotas de gestão de usuários
    router.resource('users', UserController).apiOnly()
  }).use(middleware.auth({ guards: ['api'] }))

}).prefix('/api/v1')

