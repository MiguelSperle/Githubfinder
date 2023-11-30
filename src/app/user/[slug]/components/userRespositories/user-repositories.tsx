import { RepositoriesType, UserPropsType } from '@/@types'
import * as Styled from '../userRespositories/styles'
import Typography from '@/components/typography'
import Link from 'next/link'
import { FetchRepositories } from '@/service/fetchRepositories'

export default async function UserRepositories({ user }: UserPropsType) {
  const repos = await FetchRepositories({
    user,
  })

  return (
    <Styled.ContainerRepositories>
      <Styled.ContainerSecondRepositories>
        {/* <Typography text="Repositories" fontSize="2rem" /> */}

        <Styled.ContainerOnlyRepositories>
          {repos && repos.length > 0 ? (
            repos.map((repositories: RepositoriesType) => (
              <Styled.ContainerRepository key={repositories.id}>
                {/* <Typography text={repositories.name} fontSize="0.8rem" /> */}
                <Link href={repositories.svn_url} target="_blank">
                  Repository
                </Link>
              </Styled.ContainerRepository>
            ))
          ) : (
            <p>ola</p>
            // <Typography text="Don't have repositories" fontSize="0.875rem" />
          )}
        </Styled.ContainerOnlyRepositories>
      </Styled.ContainerSecondRepositories>
    </Styled.ContainerRepositories>
  )
}
