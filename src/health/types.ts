// Response Types

export type HealthStatus = {
  status: string
  description?: string
  checks?: Record<string, any>
  links?: string[]
}
