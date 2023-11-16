'use client'

import styled from 'styled-components'

export const ContainerNotFoundMessage = styled.div`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 2rem;

  .button-chevron-left {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0.3rem;
  }

  .button-chevron-left a {
    text-decoration: none;
    color: #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .button-go-to-find {
    border-radius: 0.4rem;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    border: 1px solid white;

    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.text.primary};
      border: 0.5px solid ${({ theme }) => theme.colors.text.primary};
      transition: all 0.5s ease;
    }

    transition: all 0.5s ease;
  }

  .button-go-to-find a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.secondary};
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`
