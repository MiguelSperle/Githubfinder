'use client'

import styled from 'styled-components'

export const ContainerRepositories = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.borderColor.primary};
  border-radius: 0.3rem;
  width: 800px;
  min-height: 300px;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 700px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 450px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 300px;
  }
`

export const ContainerSecondRepositories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
`

export const ContainerOnlyRepositories = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`

export const ContainerRepository = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.borderColor.primary};
  border-radius: 0.3rem;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    font-size: 0.8rem;
    color: #f1f1f1;
    text-decoration: underline;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 260px;
  }
`
