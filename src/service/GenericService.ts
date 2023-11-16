import axios, { AxiosError } from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

// Intercptando os erros e tratando eles
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error instanceof AxiosError) {
      if (error.code === AxiosError.ERR_NETWORK) {
        throw new Error('Network error, try again later')
      }

      if (error.response?.status === 403) {
        throw new Error('Wait some minutes, to search a user again')
      }

      if (error.response?.status === 404) {
        throw new Error('User not found')
      }
      return Promise.reject(error)
    }
  },
)
