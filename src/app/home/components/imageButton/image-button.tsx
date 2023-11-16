'use client'

import Button from '@/components/Button'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import * as Styled from '../imageButton/styles'
import Image from 'next/image'
import github from '../../../../assets/github.png'
import { useContext } from 'react'
import { AuthContextTheme } from '@/context/ThemeContext'

export default function ImageButton() {
  const { handleReplaceTheme, lightTheme } = useContext(AuthContextTheme)

  return (
    <Styled.ContainerImageButton>
      <Button
        type="submit"
        width="70px"
        height="50px"
        fontSize="1.25rem"
        className="button-change-theme"
        onClick={handleReplaceTheme}
      >
        {lightTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
      <Image
        className="image-main"
        width={600}
        height={600}
        src={github}
        alt=""
      />
    </Styled.ContainerImageButton>
  )
}
