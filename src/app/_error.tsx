'use client'

import Button from '@/components/button'
import { HiChevronLeft } from 'react-icons/hi'
import Link from 'next/link'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import Typography from '@/components/typography'

const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem;

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
`

function Error({ statusCode }: any) {
  return (
    <ContainerError>
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
      <Typography
        text={
          statusCode
            ? `An error ${statusCode} occurred on server, wait some minutes until the API back`
            : 'An error occurred on client'
        }
        fontSize="1.125rem"
      />
    </ContainerError>
  )
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
