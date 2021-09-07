// Response Types

export type NewOrUpdatedApiKeyBody = {
  refreshToken: string
  description?: string
  ttl?: number
}

export type ApiKey = {
  key: string
}
