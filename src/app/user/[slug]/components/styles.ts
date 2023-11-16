'use client'

import styled from 'styled-components'

export const ContainerPageUser = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContainerButtonBack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2rem;
  width: 100vw; /* Defina o tamanho inicial em vw */
  max-width: 1160px; /* Defina um tamanho máximo em pixels ou outra unidade desejada, (PARA NÃO AUMENTAR QUANDO A TELA AUMENTAR) (TAMANHO FIXO)*/

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    max-width: 800px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    max-width: 700px;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    max-width: 450px;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    max-width: 300px;
  }

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
    border: none;
  }

  .button-change-theme {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.text.secondary};
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0.3rem;
    border: none;
  }
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

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ContainerInformationProfileRepositories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Loading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  .loading-text {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    border: 5px solid ${({ theme }) => theme.colors.text.primary};
    border-top: 5px solid #0f72cf;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
