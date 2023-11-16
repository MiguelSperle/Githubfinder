'use client'

import styled from 'styled-components'

export const ContainerProfile = styled.div`
  border: 3px solid ${({ theme }) => theme.colors.borderColor.primary};
  border-radius: 0.3rem;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  @media screen and (min-width: 1201px) {
    width: 350px;
  }

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: 800px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 700px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 450px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 300px;
  }

  .image-avatarUrl {
    border-radius: 50%;
  }
`

export const ContainerProfileText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`
