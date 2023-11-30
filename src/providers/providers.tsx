'use client'

import { ContextThemeProvider } from '@/context/theme/context'

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ContextThemeProvider>{children}</ContextThemeProvider>
}
