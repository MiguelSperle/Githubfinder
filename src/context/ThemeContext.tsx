'use client'

import React, { ReactNode, createContext, useState } from 'react'
import { setCookie, getCookie } from 'cookies-next'

const DEFAULT_VALUE = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLightTheme: () => {},
  lightTheme: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleReplaceTheme: () => {},
}

interface ProviderProps {
  children: ReactNode
}

interface PropsUserContext {
  lightTheme: boolean
  setLightTheme: React.Dispatch<React.SetStateAction<boolean>>
  handleReplaceTheme: () => void
}

const AuthContextTheme = createContext<PropsUserContext>(DEFAULT_VALUE)

export const ProviderThemeContext: React.FC<ProviderProps> = ({ children }) => {
  const [lightTheme, setLightTheme] = useState(
    getCookie('saveTheme') === 'true',
  )

  function handleReplaceTheme() {
    const newTheme = !lightTheme
    setLightTheme(newTheme)
    setCookie('saveTheme', newTheme.toString())
  }

  return (
    <AuthContextTheme.Provider
      value={{
        lightTheme,
        setLightTheme,
        handleReplaceTheme,
      }}
    >
      {children}
    </AuthContextTheme.Provider>
  )
}

export { AuthContextTheme }
