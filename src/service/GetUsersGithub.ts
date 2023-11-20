import { api } from './genericService'
import { NameProps } from '@/@types'

const GetService = async ({ params }: NameProps) => {
  const response = await api.get(`/${params.slug}`)
  return response.data
}

export const GetUsersService = {
  GetService,
}
