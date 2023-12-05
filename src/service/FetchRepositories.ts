import { UserPropsType } from '@/@types'

export async function FetchRepositories({ user }: UserPropsType) {
  if (!user) return null

  const response = await fetch(
    `https://api.github.com/users/${user.login}/repos`,
    {
      next: { revalidate: 30 }, // Até bater esse tempo ele vai usar o cache que foi salvo na primeira fetch, depos que bater o mesmo, ele refaz a chamada e salva novamente em cache e fica nesse ciclo.(A CADA 1 HORA)
    },
  )

  return response.json()
}
