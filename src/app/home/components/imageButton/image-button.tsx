'use client'

import Button from '../../../../components/button'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import * as Styled from '../imageButton/styles'
import Image from 'next/image'
import github from '../../../../assets/github.png'
import { useContextTheme } from '@/context/theme/context'

export default function ImageButton() {
  const { lightTheme, ThemeSwitcher } = useContextTheme()

  return (
    <Styled.ContainerImageButton>
      <Button
        type="submit"
        width="70px"
        height="50px"
        fontSize="1.25rem"
        className="button-change-theme"
        onClick={ThemeSwitcher}
      >
        {lightTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
      <Image
        className="image-main"
        width={600}
        height={600}
        src={github}
        alt="image-main-github"
      />
    </Styled.ContainerImageButton>
  )
}
