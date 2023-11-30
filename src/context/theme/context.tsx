import { createContext, useState, useContext } from 'react'
import { setLocalStorage } from '@/utils/functions/localStorage/setLocalStorage'
import { getLocalStorage } from '@/utils/functions/localStorage/getLocalStorage'

interface PropsContextTheme {
  lightTheme: boolean
  setLightTheme: React.Dispatch<React.SetStateAction<boolean>>
  ThemeSwitcher: () => void
}

const AuthContextTheme = createContext<PropsContextTheme>({
  lightTheme: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLightTheme: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ThemeSwitcher: () => {},
})

export const ContextThemeProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [lightTheme, setLightTheme] = useState<boolean>(
    getLocalStorage('saveTheme') === 'true',
  )

  function ThemeSwitcher() {
    const valueTheme = !lightTheme
    setLightTheme(valueTheme)
    setLocalStorage('saveTheme', valueTheme.toString())
  }

  return (
    <AuthContextTheme.Provider
      value={{ lightTheme, setLightTheme, ThemeSwitcher }}
    >
      {children}
    </AuthContextTheme.Provider>
  )
}

export const useContextTheme = () => useContext(AuthContextTheme)
