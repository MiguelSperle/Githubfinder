'use client'

import * as Styled from './styles'
import Link from 'next/link'
import { HiChevronLeft } from 'react-icons/hi'
import Typography from '@/components/Typography'
import Button from '@/components/Button'
import { deleteCookie } from 'cookies-next'

export default function NotFound() {
  return (
    <Styled.ContainerNotFoundMessage>
      <Button
        width="50px"
        height="50px"
        fontSize="1.5rem"
        className="button-chevron-left"
        onClick={() => deleteCookie('saveUser')}
      >
        <Link href="/">
          <HiChevronLeft />
        </Link>
      </Button>

      <Typography text="Opss.." fontSize="1.5rem" />
      <Typography
        text="User doesn`t exist, back to finder"
        fontSize="1rem"
        style={{ letterSpacing: '4px' }}
      />

      <Button
        width="150px"
        height="50px"
        fontSize="1.25rem"
        className="button-go-to-find"
      >
        <Link href="/">FIND</Link>
      </Button>
    </Styled.ContainerNotFoundMessage>
  )
}
