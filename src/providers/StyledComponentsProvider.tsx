'use client'

import StyledComponentsRegistry from '@/lib/registry'
import { StyleSheetManager, ThemeProvider } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
import { theme } from '@/styles/Variables'
import GlobalStyle from '@/styles/GlobalStyle'
import { useContext, useEffect, useState } from 'react'
import { AuthContextTheme } from '@/context/ThemeContext'

const StyledComponentsProvider = (props: React.PropsWithChildren) => {
  const [isMountedLayout, setIsMountedLayout] = useState(false)

  const { lightTheme } = useContext(AuthContextTheme)

  useEffect(() => {
    // esse useEffect, ele obriga esperar o client carregar para renderizar o layout(com theme)
    setIsMountedLayout(true)
  }, [])

  return (
    <StyledComponentsRegistry>
      <StyleSheetManager shouldForwardProp={isPropValid}>
        <ThemeProvider theme={lightTheme ? theme.lightTheme : theme.darkTheme}>
          <GlobalStyle />
          {isMountedLayout && props.children}
        </ThemeProvider>
      </StyleSheetManager>
    </StyledComponentsRegistry>
  )
}

export default StyledComponentsProvider
