import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: ${({ theme }) => theme.fontSizes.md}
  }

  body {
    background-color: ${({ theme }) => theme.colors.background.primary};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;   
  }

/* Cor de fundo da barra de rolagem */
  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

/* Cor do indicador (barra de rolagem propriamente dita) */
  ::-webkit-scrollbar-thumb {
    background-color: #757575;
  }
`
