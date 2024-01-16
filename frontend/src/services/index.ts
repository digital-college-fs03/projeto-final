import { authStore } from '../Store'

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

function withUrl (path: string) {
  return (import.meta.env.FRONTEND_API_URL + path).replace(/([^:]\/)\/+/g, '$1')
}

function withHeaders (custom: Record<string, string>): Record<string, string> {
  const common: Record<string, string> = {
    'Content-Type': 'application/json'
  }
  if (authStore.state.tokem) {
    common.Authorization = `Bearer ${authStore.state.token}`
  }
  return {
    ...common,
    ...custom
  }
}

export function post (
  path: string,
  data: Record<string, unknown> = {},
  headers: Record<string, string> = {}
): Promise<Response> {
  const input = withUrl(path)
  const init = {
    method: 'POST',
    headers: withHeaders(headers),
    body: JSON.stringify(data)
  }
  return fetch(input, init)
}

export function get (path: string, headers: Record<string, string> = {}): Promise<Response> {
  const input = withUrl(path)
  const init = {
    method: 'GET',
    headers: withHeaders(headers)
  }
  return fetch(input, init)
}

export function extractErrorMessage (exception: unknown): string {
  if (typeof exception === 'string') {
    return exception
  }
  if (exception instanceof Error) {
    return exception.message
  }
  return 'Unknown error'
}

export function parseContent (response: Response, content: Content): Content {
  // se o status não estiver entre 200 e 299, lança um erro
  if (!response.ok) {
    // usando o conteúdo da resposta como mensagem de erro
    return {
      status: Status.error,
      message: content.message || 'Unknown error'
    }
  }
  // se não houver conteúdo, lança um erro
  if (!content.data) {
    // informando que não houve dados recebidos
    return {
      status: Status.error,
      message: 'No data received'
    }
  }
  // senão retorna o conteúdo
  return content
}
