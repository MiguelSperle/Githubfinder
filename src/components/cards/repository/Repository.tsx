import { RepositoriesType, UserProps } from '@/@types'
import * as Styled from './styles'
import Typography from '@/components/Typography'
import { useRepositoriesUsers } from '@/hooks/useGetRepositories'
import Link from 'next/link'
import Loading from '@/components/Loading/Loading'

export default function Repositories({ user }: UserProps) {
  const { data, isLoading } = useRepositoriesUsers({ user })

  return (
    <Styled.ContainerRepositories>
      <Styled.ContainerSecondRepositories>
        <Typography text="Repositories" fontSize="2rem" />

        <Styled.ContainerOnlyRepositories>
          {isLoading ? (
            <Loading />
          ) : data && data.length > 0 ? (
            data.map((repositories: RepositoriesType) => (
              <Styled.ContainerRepository key={repositories.id}>
                <Typography text={repositories.name} fontSize="0.8rem" />
                <Link href={repositories.svn_url} target="_blank">
                  Repository
                </Link>
              </Styled.ContainerRepository>
            ))
          ) : (
            <Typography text="No repositories found." fontSize="1rem" />
          )}
        </Styled.ContainerOnlyRepositories>
      </Styled.ContainerSecondRepositories>
    </Styled.ContainerRepositories>
  )
}
