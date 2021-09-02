// Response Types

export type NewOrUpdatedTokenBody = {
  refreshToken: string
  description?: string
}

export type Token = {
  token: string
}
