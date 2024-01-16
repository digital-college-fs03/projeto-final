import { Content, extractErrorMessage, get, parseContent, post, Status } from './index'

export { Status }

export const signIn = async (username: string, password: string): Promise<Content> => {
  // inicializa variáveis de resposta e conteúdo
  let response: Response
  let payload: Content = { status: Status.error, message: 'Unknown error' }
  try {
    // faz a requisição
    response = await post('/api/v1/login', { username, password })
    // extrai o conteúdo da resposta como JSON
    payload = await response.json()
  } catch (error) {
    // se houver um erro, retorna um Content de erro
    return {
      status: Status.error,
      message: extractErrorMessage(error)
    }
  }
  return parseContent(response, payload)
}

export const me = async (): Promise<Content> => {
  let response: Response
  let payload: Content = { status: Status.error, message: 'Unknown error' }
  try {
    response = await get('/api/v1/me')
    payload = await response.json()
  } catch (error) {
    return {
      status: Status.error,
      message: extractErrorMessage(error)
    }
  }
  return parseContent(response, payload)
}

export const subscribe = async (username: string, password: string): Promise<Content> => {
  // inicializa variáveis de resposta e conteúdo
  let response: Response
  let content: Content = { status: Status.error, message: 'Unknown error' }
  try {
    // faz a requisição
    response = await post('/api/v1/public/users', { username, password })
    // extrai o conteúdo da resposta como JSON
    content = await response.json()
  } catch (error) {
    // se houver um erro, retorna um Content de erro
    return {
      status: Status.error,
      message: extractErrorMessage(error)
    }
  }
  return parseContent(response, content)
}
