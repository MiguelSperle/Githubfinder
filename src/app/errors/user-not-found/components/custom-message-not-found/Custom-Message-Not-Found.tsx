import Button from '@/components/Button'
import Typography from '@/components/Typography'
import Link from 'next/link'
import { HiChevronLeft } from 'react-icons/hi'
import * as Styled from './Styles'

export default function CustomMessageNotFound() {
  return (
    <Styled.ContainerCustomError404>
      <Link href="/">
        <Button
          width="50px"
          height="50px"
          fontSize="1.5rem"
          className="button-chevron-left"
        >
          <HiChevronLeft />
        </Button>
      </Link>

      <Typography text="Opss.." fontSize="1.5rem" />
      <Typography text="User doesn`t exist, back to finder" fontSize="1rem" />

      <Link href="/">
        <Button
          width="150px"
          height="50px"
          fontSize="1.25rem"
          className="button-go-find"
        >
          FIND
        </Button>
      </Link>
    </Styled.ContainerCustomError404>
  )
}
