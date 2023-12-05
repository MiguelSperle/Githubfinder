import { ForbiddenException } from '@/utils/exceptions/Exceptions'
import { redirect } from 'next/navigation'

export async function FetchUser(name: string) {
  if (!name) return null

  const response = await fetch(`https://api.github.com/users/${name}`, {
    next: {
      revalidate: 30,
    },
  })

  if (!response.ok && response.status === 404) {
    return redirect('/user-not-found')
  }

  if (!response.ok && response.status === 403) {
    throw new ForbiddenException()
  }

  return response.json()
}
