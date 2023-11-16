import { UserProps } from '@/@types'
import { api } from './GenericService'

const GetService = async ({ user }: UserProps) => {
  const response = await api.get(`/${user?.login}/repos`)
  return response.data
}

export const GetRepositoriesService = {
  GetService,
}
