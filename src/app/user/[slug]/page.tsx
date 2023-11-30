import { NameProps } from '@/@types'
import { Suspense } from 'react'
import Loading from './components/loading/Loading'
import * as Styled from './Styles'
import HeaderTheme from './components/headerTheme/Header-Theme'
import UserCard from './components/userCard/User-Card'
import UserStats from './components/userStats/User-Stats'
import UserRepositories from './components/userRespositories/User-Repositories'
import { FetchUser } from '@/service/FetchUser'

export default async function User({ params }: NameProps) {
  const user = await FetchUser(params.slug)

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
