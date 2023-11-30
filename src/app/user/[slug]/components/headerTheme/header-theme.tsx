'use client'

import Button from '@/components/Button'
import Link from 'next/link'
import { HiChevronLeft, HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import * as Styled from '../headerTheme/Styles'
import { useContextTheme } from '@/context/theme/Context'

export default function HeaderTheme() {
  const { ThemeSwitcher, lightTheme } = useContextTheme()

  return (
    <Styled.ContainerButtonBack>
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

      <Button
        type="submit"
        width="50px"
        height="50px"
        fontSize="1.5rem"
        className="button-change-theme"
        onClick={ThemeSwitcher}
      >
        {lightTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </Styled.ContainerButtonBack>
  )
}
