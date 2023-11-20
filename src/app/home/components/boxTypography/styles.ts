'use client'

import styled from 'styled-components'

export const BoxTypography = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    align-items: center;

    .name-main {
      font-size: 3.5rem;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    align-items: center;

    .name-main {
      font-size: 2.5rem;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    align-items: center;

    .name-main {
      font-size: 2.125rem;
    }
  }
`

export const BoxSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }

  .input-widget {
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    padding-left: 1rem;
    outline: none;
    border: none;
    border-bottom: 2px solid
      ${({ theme }) => theme.colors.borderColor.secondary};

    &::placeholder {
      font-size: ${({ theme }) => theme.fontSizes.xs};
    }
  }

  .button-find {
    border-radius: 0.3rem;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.secondary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.background.primary};
      color: ${({ theme }) => theme.colors.text.primary};
      border: 0.5px solid ${({ theme }) => theme.colors.text.primary};
      transition: all 0.5s ease;
    }

    transition: all 0.5s ease;
  }
`
