import axios, { AxiosError } from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

export const DEFAULT_ERROR_MESSAGES = {
  networkError: '📡 Network error, please try again later.',
} as const

// Intercptando os erros e tratando eles
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<any>) => {
    if (error.code === AxiosError.ERR_NETWORK) {
      error.message = DEFAULT_ERROR_MESSAGES.networkError
      return Promise.reject(error)
    }

    if (error.response && error.response.status === 403) {
      // Forbidden
      error.message =
        'API sofreu muitas requisições de uma vez, aguarde alguns minutos para fazer uma nova requisição'
      return Promise.reject(error)
    }

    if (error.response && error.response.status === 404) {
      // User not found
      error.message = 'Usuário não encontrado'
      return Promise.reject(error)
    }
  },
)
