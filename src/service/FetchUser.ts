import { ForbiddenException } from '@/utils/exceptions/Exceptions'
import { redirect } from 'next/navigation'

export async function FetchUser(name: string) {
  if (!name) return null

  const response = await fetch(`https://api.github.com/users/${name}`, {
    next: { revalidate: 300 }, // Até bater esse tempo ele vai usar o cache que foi salvo na primeira fetch, depos que bater o mesmo, ele refaz a chamada e salva novamente em cache e fica nesse ciclo.(A CADA 1 HORA)
  })

  if (!response.ok && response.status === 404) {
    return redirect('/user-not-found')
  }

  if (!response.ok && response.status === 403) {
    throw new ForbiddenException()
  }

  return response.json()
}
