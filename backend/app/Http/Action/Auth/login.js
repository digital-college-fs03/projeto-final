import { login } from '../../../Service/auth.js'

export default async (request, response) => {
    try {
        // pega os dados do request
        const { username, password } = request.body
        // tenta fazer login do usuário
        const success = await login(username, password)
        // se o login foi bem sucedido, retorna o payload da sessão
        if (success) {
            // cria valores aleatórios para simular o retorno 
            // de um token e um refresh token
            const token = new Date().getTime().toString(32)
            const refreshToken = new Date().getTime().toString(16)
            const expiresAt = new Date().getTime() + 1000 * 60 * 60 * 24 * 7
            response
                .status(200)
                .json({ status: 'success', data: { token, refreshToken, expiresAt } })
            return
        }
        // se não, retorna um erro
        response
            .status(401)
            .json({ status: 'error', code: 'INVALID_CREDENTIALS' })
    } catch (error) {
        // retorna o erro para o cliente
        response
            .status(500)
            .json({
                status: 'error',
                message: error.message,
                stack: error.stack
            })
    }
}
