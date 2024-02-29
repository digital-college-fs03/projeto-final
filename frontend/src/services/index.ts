export const setToken = (newAuthorization: Record<string, unknown> | undefined): void => {
  authorization = newAuthorization
}

let authorization: Record<string, unknown> | undefined

export enum Status {
  success = 'success',
  error = 'error',
  fail = 'fail'
}

export interface Content {
  status: Status
  data?: Record<string, unknown>
  message?: string
}

export type Payload = Record<string, unknown>

const url = (path: string) => (import.meta.env.FRONTEND_API_URL + path)
  .replace(/([^:]\/)\/+/g, '$1')

const extractErrorMessage = (exception: unknown): string => {
  if (typeof exception === 'string') {
    return exception
  }
  if (exception instanceof Error) {
    return exception.message
  }
  return 'Unknown error'
}

function parseContent (response: Response, content: Content): Content {
  // se o status não estiver entre 200 e 299, lança um erro
  if (!response.ok) {
    // usando o conteúdo da resposta como mensagem de erro
    return {
      status: Status.error,
      message: content.message || 'Unknown error'
    }
  }
  // senão retorna o conteúdo
  return content
}

const request = async (method: string, path: string, data?: Payload): Promise<Content> => {
  // inicializa variáveis de resposta e conteúdo
  let response: Response
  let content: Content = { status: Status.error, message: 'Unknown error' }
  try {
    const input = url(path)
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    }
    if (authorization) {
      headers['Authorization'] = `${authorization.type} ${authorization.token}`
    }
    const init = {
      headers,
      method: method.toUpperCase(),
      body: JSON.stringify(data)
    }
    // faz a requisição
    response = await fetch(input, init)
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

export const post = (path: string, data?: Record<string, unknown>): Promise<Content> => {
  return request('post', path, data)
}
