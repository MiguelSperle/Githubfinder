import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Toda vez que focar em uma tela que tem um GET, ele refaz a requisição, passando false, evita requisição a mais
      staleTime: 1000 * 60, // a cada 1 minuto ele refaz a requisição
    },
  },
})
