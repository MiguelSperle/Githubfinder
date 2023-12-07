import { NameProps } from '@/@types'
import { Suspense } from 'react'
import Loading from './components/loading/loading'
import * as Styled from './styles'
import HeaderTheme from './components/headerTheme/header-theme'
import UserCard from './components/userCard/user-card'
import UserStats from './components/userStats/user-stats'
import UserRepositories from './components/userRespositories/user-repositories'
import { FetchUserService } from '@/service/FetchUserService'

export default async function User({ params }: NameProps) {
  const user = await FetchUserService.GetService(params.slug)

  return (
    <Styled.ContainerPageUser>
      <Suspense fallback={<Loading />}>
        <HeaderTheme />
        <Styled.ContainerSecondPageUser>
          <Styled.ContainerInformation>
            <UserCard user={user} />

            <Styled.ContainerInformationProfileRepositories>
              <UserStats user={user} />
              <UserRepositories user={user} />
            </Styled.ContainerInformationProfileRepositories>
          </Styled.ContainerInformation>
        </Styled.ContainerSecondPageUser>
      </Suspense>
    </Styled.ContainerPageUser>
  )
}
