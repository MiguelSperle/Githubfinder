'use client'

import React from 'react'
import styled from 'styled-components'

interface TextProps extends React.InputHTMLAttributes<HTMLParagraphElement> {
  fontSize: string
  fontWeight?: string
  text: string | undefined
}

const TextComponent = styled.p<TextProps>`
  // Esse inherit é se casos não passe nada, deixar o valor padrão
  font-size: ${({ fontSize }) => fontSize ?? 'inherit'};
  font-weight: ${({ fontWeight }) => fontWeight ?? 'inherit'};
`

export default function Typography({
  text,
  fontSize,
  fontWeight,
  ...props
}: TextProps) {
  return (
    <TextComponent
      text={text}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...props}
    >
      {text}
    </TextComponent>
  )
}
