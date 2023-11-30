'use client'

import React from 'react'
import styled from 'styled-components'

interface ButtonPropsType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width: string
  height: string
  fontSize?: string
  background?: string
}

const ButtonComponent = styled.button<ButtonPropsType>`
  // Esse inherit é se casos não passe nada, deixar o valor padrão
  font-size: ${({ fontSize }) => fontSize ?? 'inherit'};
  height: ${({ height }) => height ?? 'inherit'};
  width: ${({ width }) => width ?? 'inherit'};
  background-color: ${({ background }) => background ?? 'inherit'};
`

export default function Button({
  width,
  height,
  background,
  fontSize,
  ...props
}: ButtonPropsType) {
  return (
    <ButtonComponent
      fontSize={fontSize}
      height={height}
      width={width}
      background={background}
      {...props}
    ></ButtonComponent>
  )
}
