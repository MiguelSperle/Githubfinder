'use client'

import styled from 'styled-components'

export const ContainerHome = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ContainerSecondHome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  min-height: 80vh;
  min-width: 70vw;

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
