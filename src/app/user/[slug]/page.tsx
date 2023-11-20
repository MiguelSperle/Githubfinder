import { GetUsersService } from '@/service/getUsersGithub'
import { NameProps } from '@/@types'
import { Suspense } from 'react'
import Loading from './components/loading/loading'
import * as Styled from './styles'
import HeaderTheme from './components/headerTheme/header-theme'
import UserCard from './components/userCard/user-card'
import UserStats from './components/userStats/user-stats'
import UserRepositories from './components/userRespositories/user-repositories'
import { AxiosError } from 'axios'
import Error from '@/app/_error'
import Custom404 from './404'

export default async function User({ params }: NameProps) {
  let user

  try {
    user = await GetUsersService.GetService({
      params: { slug: params.slug },
    })
  } catch (error: any) {
    const axiosError = error as AxiosError
    const errorCode = axiosError.response ? axiosError.response.status : false

    if (errorCode === 404) {
      return <Custom404 />
    } else {
      return <Error statusCode={errorCode} />
    }
  }

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
