import { createContext, useState, useContext } from 'react'
import Cookies from 'js-cookie'

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
    Cookies.get('saveTheme') === 'true',
  )

  function ThemeSwitcher() {
    const valueTheme = !lightTheme
    setLightTheme(valueTheme)
    Cookies.set('saveTheme', valueTheme.toString())
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
