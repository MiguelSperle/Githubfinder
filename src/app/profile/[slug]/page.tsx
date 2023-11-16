'use client'

import Button from '@/components/Button'
import * as Styled from './styles'
import { HiChevronLeft, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { AuthContextTheme } from '@/context/ThemeContext'
import { useContext } from 'react'
import { useGetUsers } from '@/hooks/useGetUsers'
import { nameProps } from '@/@types/index'
import Profile from '@/components/cards/profile/Profile'
import Stats from '@/components/cards/stats/Stats'
import Repositories from '@/components/cards/repository/Repository'
import NotFound from '@/app/notFoundUser/not-found'
import { deleteCookie } from 'cookies-next'
import Loading from '@/components/Loading/Loading'
import Link from 'next/link'

export default function ProfileUser({ params }: nameProps) {
  const { lightTheme, handleReplaceTheme } = useContext(AuthContextTheme)

  const { data, isLoading } = useGetUsers({ params })

  if (isLoading) {
    return <Loading />
  }

  if (!data) {
    return NotFound()
  }

  return (
    <Styled.ContainerPageUser>
      <Styled.ContainerButtonBack>
        <Link href="/">
          {' '}
          <Button
            width="50px"
            height="50px"
            fontSize="1.5rem"
            className="button-chevron-left"
            onClick={() => deleteCookie('saveUser')}
          >
            <HiChevronLeft />
          </Button>
        </Link>

        <Button
          type="submit"
          width="50px"
          height="50px"
          fontSize="1.5rem"
          className="button-change-theme"
          onClick={handleReplaceTheme}
        >
          {lightTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
        </Button>
      </Styled.ContainerButtonBack>
      <Styled.ContainerSecondPageUser>
        <Styled.ContainerInformation>
          <Profile user={data} />

          <Styled.ContainerInformationProfileRepositories>
            <Stats user={data} />
            <Repositories user={data} />
          </Styled.ContainerInformationProfileRepositories>
        </Styled.ContainerInformation>
      </Styled.ContainerSecondPageUser>
    </Styled.ContainerPageUser>
  )
}
