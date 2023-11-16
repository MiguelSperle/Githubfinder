import { useQuery } from '@tanstack/react-query'
import { GetUsersService } from '@/service/GetUsersGithub'
import { ApiErrorType, nameProps } from '@/@types/index'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

export function useGetUsers({ params }: nameProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users', params.slug], // Adicionando aqui por exemplo o slug na key, eu faço com que o react faça um refetch automatico toda vez que o slug mudar
    queryFn: async () =>
      await GetUsersService.GetService({
        params: {
          slug: params.slug,
        },
      }),
  })

  useEffect(() => {
    async function GetErrors() {
      if (error) {
        const apiError = error as ApiErrorType
        toast.error(apiError.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: 'dark',
        })
      }
    }

    GetErrors()
  }, [error, params.slug])

  return {
    data,
    isLoading,
  }
}
