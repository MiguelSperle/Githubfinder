import { UserProps } from '@/@types'
import * as Styled from '../userStats/styles'
import Link from 'next/link'
import Typography from '@/components/typography'
import Image from 'next/image'

export default function UserStats({ user }: UserProps) {
  const created = new Date(user?.created_at || '')
  const date = created.toLocaleString()

  const previewStatsUser = `https://github-readme-stats.vercel.app/api?username=${user?.login}&show_icons=true&theme=graywhite&include_all_commits=true&count_private=true`

  return (
    <Styled.ContainerStats>
      <Styled.ContainerInfoUser>
        <Link
          className="link-user"
          href={user?.html_url ?? ''}
          target="_blank"
        >{`github.com/${user?.login}`}</Link>

        <Typography text={user?.name} fontSize="1.5rem" />
        <Typography text={user?.bio} fontSize="0.8rem" />
        <Typography text={`Followers: ${user?.followers}`} fontSize="0.8rem" />
        <Typography text={`Following: ${user?.following}`} fontSize="0.8rem" />
        <Typography text={`Created: ${date}`} fontSize="0.8rem" />
      </Styled.ContainerInfoUser>

      <Image
        className="stats-user"
        src={previewStatsUser}
        width={450}
        height={200}
        alt="stats-user"
      />
    </Styled.ContainerStats>
  )
}
