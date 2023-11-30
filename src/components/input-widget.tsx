'use client'

import React from 'react'
import styled from 'styled-components'

interface InputPropsType extends React.InputHTMLAttributes<HTMLInputElement> {
  width: string
  height: string
  background?: string
  fontSize?: string
}

const InputComponent = styled.input<InputPropsType>`
  // Esse inherit é se casos não passe nada, deixar o valor padrão
  font-size: ${({ fontSize }) => fontSize ?? 'inherit'};
  background: ${({ background }) => background ?? 'inherit'};
  height: ${({ height }) => height ?? 'inherit'};
  width: ${({ width }) => width ?? 'inherit'};
`

export default function InputWidget({
  width,
  height,
  background,
  fontSize,
  ...props
}: InputPropsType) {
  return (
    <InputComponent
      fontSize={fontSize}
      background={background}
      height={height}
      width={width}
      {...props}
    />
  )
}
