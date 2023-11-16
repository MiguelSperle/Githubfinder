export interface nameProps {
  params: {
    slug: string
  }
}

export interface UserType {
  login: string
  location: string
  public_repos: number
  avatar_url: string
  html_url: string
  name: string
  bio: string
  followers: string
  following: string
  created_at: string
}

export interface UserProps {
  user: UserType | null
}

export interface RepositoriesType {
  id: number
  name: string
  svn_url: string
}

export interface ApiErrorType {
  message: string
}
