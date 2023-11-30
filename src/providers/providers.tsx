'use client'

import { ContextThemeProvider } from '@/context/theme/Context'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ContextThemeProvider>{children}</ContextThemeProvider>
}
