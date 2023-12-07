import { UserPropsType } from '@/@types'
import { api } from './GenericService'

export const GetService = async ({ user }: UserPropsType) => {
  try {
    if (!user) return null

    const response = await api.get(`${user.login}/repos`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const FetchRepositoriesService = {
  GetService,
}
