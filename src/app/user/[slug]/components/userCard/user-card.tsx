import * as Styled from './styles'
import { UserProps } from '@/@types'
import Typography from '@/components/Typography'
import Image from 'next/image'

export default function UserCard({ user }: UserProps) {
  return (
    <Styled.ContainerProfile>
      <Image
        className="image-avatarUrl"
        src={user?.avatar_url ?? ''}
        width={200}
        height={200}
        alt=""
      />

      <Styled.ContainerProfileText>
        <Typography text={user?.login} fontSize="1.5rem" />
        <Typography text={user?.location} fontSize="0.8rem" />
        <Typography
          text={`${user?.public_repos} Repositories`}
          fontSize="0.8rem"
        />
      </Styled.ContainerProfileText>
    </Styled.ContainerProfile>
  )
}
