'use client'

import Button from '@/components/button'
import Typography from '@/components/typography'
import Cookies from 'js-cookie'
import Link from 'next/link'
import { HiChevronLeft } from 'react-icons/hi'
import styled from 'styled-components'

const ContainerCustomError404 = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem;

  a {
    width: 50px;
  }

  .button-chevron-left {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0.3rem;
  }

  .button-go-find {
    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid white;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.text.primary};
      border: 0.5px solid ${({ theme }) => theme.colors.text.primary};
      transition: all 0.5s ease;
    }
    transition: all 0.5s ease;
  }
`

export default function Custom404() {
  return (
    <ContainerCustomError404>
      <Link href="/">
        <Button
          width="50px"
          height="50px"
          fontSize="1.5rem"
          className="button-chevron-left"
          onClick={() => Cookies.remove('saveUser')}
        >
          <HiChevronLeft />
        </Button>
      </Link>

      <Typography text="Opss.." fontSize="1.5rem" />
      <Typography
        text="User doesn`t exist, back to finder"
        fontSize="1rem"
        style={{ letterSpacing: '4px' }}
      />

      <Link href="/">
        <Button
          width="150px"
          height="50px"
          fontSize="1.25rem"
          className="button-go-find"
          onClick={() => Cookies.remove('saveUser')}
        >
          FIND
        </Button>
      </Link>
    </ContainerCustomError404>
  )
}
