'use client'

import Button from '@/components/Button'
import * as Styled from './styles'
import { HiChevronLeft, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { AuthContextTheme } from '@/context/ThemeContext'
import { useContext } from 'react'
import UserCard from './userCard/user-card'
import UserStats from './userStats/user-stats'
import UserRepositories from './userRespositories/user-repositories'
import { deleteCookie } from 'cookies-next'
import Link from 'next/link'
import { UserType } from '@/@types'

export default function ProfileInformation({ data }: { data: UserType }) {
  const { lightTheme, handleReplaceTheme } = useContext(AuthContextTheme)

  return (
    <Styled.ContainerPageUser>
      <Styled.ContainerButtonBack>
        <Link href="/">
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
          <UserCard user={data} />

          <Styled.ContainerInformationProfileRepositories>
            <UserStats user={data} />
            <UserRepositories user={data} />
          </Styled.ContainerInformationProfileRepositories>
        </Styled.ContainerInformation>
      </Styled.ContainerSecondPageUser>
    </Styled.ContainerPageUser>
  )
}
