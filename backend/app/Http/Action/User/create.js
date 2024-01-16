import * as userRepository from '../../../Repository/user.js'

export default async (request, response) => {
    // captura o username e a senha do request
    const { username, password } = request.body
    try {
        // usa o repositório para criar um novo usuário e receber o id gerado para ele
        const id = await userRepository.create(username, password)
        // retorna sucesso para o cliente
        response
            .status(201)
            .header('Location', `/api/v1/users/${id}`)
            .json({ status: 'success', data: { id, username } })
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
