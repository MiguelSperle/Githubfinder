'use client'

import React from 'react'
import styled from 'styled-components'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  width: string
  height: string
  background?: string
  fontSize?: string
}

const InputComponent = styled.input<InputProps>`
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
}: InputProps) {
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
