'use client'

import styled from 'styled-components'

export const ContainerPageUser = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContainerSecondPageUser = styled.div`
  min-height: 100vh;
  min-width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
`

export const ContainerInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.25rem;
  margin-bottom: 1rem;

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
  }
`

export const ContainerInformationProfileRepositories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
