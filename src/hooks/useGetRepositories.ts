import { useQuery } from '@tanstack/react-query'
import { GetRepositoriesService } from '@/service/GetRepositoriesGithub'
import { UserProps } from '@/@types'

export function useRepositoriesUsers({ user }: UserProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['repositories', user],
    queryFn: async () => await GetRepositoriesService.GetService({ user }),
  })

  return {
    data,
    isLoading,
  }
}
