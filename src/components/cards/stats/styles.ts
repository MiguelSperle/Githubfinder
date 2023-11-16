'use client'

import styled from 'styled-components'

export const ContainerStats = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.borderColor.primary};
  border-radius: 0.3rem;
  width: 800px;
  height: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2.5rem;

  .stats-user {
    height: auto;
    @media screen and (min-width: 1201px) {
      width: 420px;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
      width: 350px;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
      width: 350px;
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
      width: 280px;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 700px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 450px;
    height: 450px;
    flex-direction: column;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 300px;
    height: 400px;
    flex-direction: column;
  }
`

export const ContainerInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding-left: 2rem;

  @media screen and (min-width: 481px) and (max-width: 768px) {
    padding-left: 0;
    padding-top: 1.5rem;
    align-items: center;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    padding-left: 0;
    padding-top: 1.5rem;
    align-items: center;
  }

  .link-user {
    text-decoration: none;
    font-size: 0.6rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`
