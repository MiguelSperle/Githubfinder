'use client'

import styled from 'styled-components'

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
