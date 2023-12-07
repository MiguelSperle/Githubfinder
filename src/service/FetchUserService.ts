import { ForbiddenException } from '@/utils/exceptions/Exceptions'
import { redirect } from 'next/navigation'
import { AxiosError } from 'axios'
import { api } from './GenericService'

const GetService = async (name: string) => {
  try {
    if (!name) return null

    const response = await api.get(name)
    return response.data
  } catch (error) {
    const errorResponse = error as AxiosError
    const errorCode = errorResponse.response
      ? errorResponse.response.status
      : false

    if (errorCode === 404) {
      return redirect('/user-not-found')
    }

    if (errorCode === 403) {
      throw new ForbiddenException()
    }
  }
}

export const FetchUserService = {
  GetService,
}
