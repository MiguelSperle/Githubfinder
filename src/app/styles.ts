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

export const BoxTypography = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    .boxText {
      align-items: center;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    .boxText {
      align-items: center;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    .boxText {
      align-items: center;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    .name-main {
      font-size: 2.25rem;
    } // teste

    .boxText {
      align-items: center;
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
    border-bottom: 1px solid;

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

export const ContainerImageButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 40vw;
  position: relative;

  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: 40vw;
    align-items: center;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 50vw;
    align-items: center;
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 75vw;
    align-items: center;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 100vw;
    align-items: center;
  } // testw

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

    @media screen and (min-width: 320px) and (max-width: 480px) {
      width: 60px;
      right: 4px;
    }
  }

  .image-main {
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
      width: 400px;
      height: 400px;
    }

    @media screen and (min-width: 769px) and (max-width: 1024px) {
      width: 350px;
      height: 350px;
    }

    @media screen and (min-width: 481px) and (max-width: 768px) {
      width: 325px;
      height: 325px;
    }

    @media screen and (min-width: 320px) and (max-width: 480px) {
      width: 250px;
      height: 250px;
    }
  }
`
