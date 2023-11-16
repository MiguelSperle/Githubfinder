import React from 'react'
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width: string
  height: string
  fontSize?: string
  background?: string
}

const ButtonComponent = styled.button<ButtonProps>`
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
}: ButtonProps) {
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
