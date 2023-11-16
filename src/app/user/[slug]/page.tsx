import { nameProps } from '@/@types/index'
import NotFound from '@/app/notFoundUser/not-found'
import ProfileInformation from './components/profile-information'
import { GetUsersService } from '@/service/GetUsersGithub'

export default async function User({ params }: nameProps) {
  // const { data, isLoading } = useGetUsers({ params })

  const user = await GetUsersService.GetService({
    params: { slug: params.slug },
  })

  // em dúvida ainda se uso axios ou fetch

  const response = await fetch(`https://api.github.com/users/${params.slug}`)
  const userFetch = await response.json()

  // if (isLoading) {
  //   return <Loading />
  // }

  if (!user) {
    return NotFound()
  }

  return <ProfileInformation data={user} />
}
