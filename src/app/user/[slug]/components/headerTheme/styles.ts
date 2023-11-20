'use client'

import styled from 'styled-components'

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

  a {
    width: 50px;
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
  }
`
