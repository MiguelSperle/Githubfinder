'use client'

import styled from 'styled-components'

export const ContainerImageButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 40vw;
  position: relative;

  .button-change-theme {
    position: absolute;
    right: 0;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${({ theme }) => theme.colors.background.secondary};
      color: ${({ theme }) => theme.colors.text.secondary};
      transition: all 0.3s ease;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
      right: 15px;
    }
  }

  .image-main {
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
      width: 400px;
      height: 400px;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
      width: 400px;
      height: 400px;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
      width: 350px;
      height: 350px;
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
      width: 250px;
      height: 250px;
    }
  }
`
