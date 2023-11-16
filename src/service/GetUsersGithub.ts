import { api } from './GenericService'
import { nameProps } from '@/@types/index'

const GetService = async ({ params }: nameProps) => {
  const response = await api.get(`/${params.slug}`)
  return response.data
}

export const GetUsersService = {
  GetService,
}
