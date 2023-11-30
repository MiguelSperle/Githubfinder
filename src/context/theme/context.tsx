import { createContext, useState, useContext } from 'react'
import { setLocalStorage } from '@/utils/functions/localStorage/SetLocalStorage'
import { getLocalStorage } from '@/utils/functions/localStorage/GetLocalStorage'

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
  function ThemeSwitcher() {
    const valueTheme = !lightTheme
    setLightTheme(valueTheme)
    setLocalStorage('saveTheme', valueTheme.toString())
  }

  const [lightTheme, setLightTheme] = useState<boolean>(
    getLocalStorage('saveTheme') === 'true',
  )

  return (
    <AuthContextTheme.Provider
      value={{ lightTheme, setLightTheme, ThemeSwitcher }}
    >
      {children}
    </AuthContextTheme.Provider>
  )
}

export const useContextTheme = () => useContext(AuthContextTheme)
